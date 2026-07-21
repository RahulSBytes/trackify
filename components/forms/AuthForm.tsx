import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import ROUTES from '@/constants/routes'
import { Path } from 'react-hook-form'
import Link from 'next/link'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface AuthFormProps<T extends FieldValues> {
  FormType: 'SIGN_IN' | 'SIGN_UP'
  schema: z.ZodType<T, T>
  defaultValues: T
  onSubmit: (data: T) => Promise<{ success: boolean }>
}

export function AuthForm<T extends FieldValues>({
  FormType,
  schema,
  defaultValues,
  onSubmit
}: AuthFormProps<T>) {
  const router = useRouter()

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>
  })

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = (await onSubmit(data)) as ActionResponse

    if (result?.success) {
      toast('Success', {
        description:
          FormType === 'SIGN_IN'
            ? 'You have successfully signed in.'
            : 'You have successfully signed up.'
      })

      router.replace(ROUTES.HOME)
    } else {
      toast.error(`Error (${result?.status})`, {
        description: result?.error?.message
      })
    }
  }

  const ButtonText = FormType === 'SIGN_UP' ? 'Sign up' : 'Sign in'

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full flex gap-3 flex-col'>
        {Object.keys(defaultValues).map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {fieldName === 'email'
                    ? 'Email Address'
                    : fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                </FormLabel>

                <FormControl className='border border-zinc-800 bg-zinc-800/20'>
                  <Input
                    required
                    className='my-1'
                    type={fieldName === 'password' ? 'password' : 'text'}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type='submit'
          disabled={form.formState.isSubmitting}
          className='my-2 w-full'
        >
          {form.formState.isSubmitting
            ? FormType === 'SIGN_IN'
              ? 'Signing in...'
              : 'Signing up...'
            : ButtonText}
        </Button>
      </form>



      <div className='flex-center flex w-full text-sm mt-3'>
        {FormType === 'SIGN_IN' ? (
          <div>
            Don't have an account?{' '}
            <Link href={ROUTES.SIGN_UP} className='text-primary'>
              Sign up
            </Link>{' '}
          </div>
        ) : (
          <div>
            Already have an account?{' '}
            <Link href={ROUTES.SIGN_IN} className='text-primary'>
              Sign in
            </Link>{' '}
          </div>
        )}
      </div>
    </Form>
  )
}
