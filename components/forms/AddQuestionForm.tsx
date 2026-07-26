'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import {  useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '../ui/input'
import { applicationSchema } from '@/lib/validation'
import { RotateCw } from 'lucide-react'
import { Application } from '@/types/global'
import { Field, FieldLabel } from '../ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {  APPLICATION_STATUSES_UI, JOB_TYPE_OPTIONS } from '@/constants'

interface Params {
  application?: Application
  isEdit?: boolean
}

const AddQuestionForm = ({ application, isEdit = false }: Params) => {
  //   const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      role: '',
      dateApplied: new Date().toLocaleDateString('en-CA'),
      company: '',
      location: '',
      job_description: '',
      salery_or_stipend: 0,
      type: 'full_time',
      portal: '',
      status: 'applied',
      logo: ''
    }
  })

  //   const handleCreateQuestion = async (
  //     data: z.infer<typeof applicationSchema>
  //   ) => {
  //     startTransition(async () => {
  //       if (isEdit && application) {
  //         const result = await editQuestion({
  //           questionId: question?._id,
  //           ...data
  //         })

  //         if (result.success) {
  //           toast({
  //             title: 'Success ',
  //             description: 'Your question has been updated successfully.'
  //           })

  //           router.push(ROUTES.QUESTION(question?._id))
  //         } else {
  //           toast({
  //             title: `Error (${result.status})`,
  //             description: result.error?.message,
  //             variant: 'destructive'
  //           })
  //         }

  //         return
  //       }

  //       const result = await createQuestion(data)

  //       if (result.success) {
  //         toast({
  //           title: 'Success',
  //           description: 'Your question has been posted successfully.'
  //         })

  //         if (result.data) router.push(ROUTES.QUESTION(result.data._id))
  //       } else {
  //         toast({
  //           title: `Error (${result.status})`,
  //           description: result.error?.message,
  //           variant: 'destructive'
  //         })
  //       }
  //     })
  //   }

  return (
    <Form {...form}>
      <form className='flex w-full flex-col gap-8 overflow-y-auto'>
        <div className='flex gap-6'>
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base'>
                  Role <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl className='mt-2'>
                  <Input className='min-h-10 border' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='dateApplied'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base'>
                  Date <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl className='mt-2'>
                  <Input type='date' className='min-h-10 border' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className='flex gap-6'>
          <FormField
            control={form.control}
            name='company'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base'>
                  Company <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl className='mt-2'>
                  <Input className='min-h-10 border' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base'>
                  Location <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl className='mt-2'>
                  <Input className='min-h-10 border' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Field>
          <FieldLabel htmlFor='textarea-message' className='text-base'>
            Job description
          </FieldLabel>
          <Textarea
            id='textarea-message'
            className='min-h-28'
            placeholder='Type your message here.'
          />
        </Field>

        <div className='flex gap-6'>
          <FormField
            control={form.control}
            name='salery_or_stipend'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base'>
                  Salery / stipend <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl className='mt-2'>
                  <Input type='number' className='min-h-10 border' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base mb-2'>
                  Job type <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className='min-h-10 w-full border'>
                      <SelectValue placeholder='Select job type' />
                    </SelectTrigger>
                    <SelectContent>
                      {JOB_TYPE_OPTIONS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className='flex gap-6'>
          <FormField
            control={form.control}
            name='portal'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base'>
                  Portal <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl className='mt-2'>
                  <Input type='number' className='min-h-10 border' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-0'>
                <FormLabel className='text-base mb-2'>
                  Status <span className='text-red-400'>*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className='min-h-10 w-full border'>
                      <SelectValue placeholder='Select job type' />
                    </SelectTrigger>
                    <SelectContent>
                      {APPLICATION_STATUSES_UI.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className='mt-4 flex justify-end gap-4'>
          <Button className='border-primary bg-transparent' variant='outline'>
            Reset
          </Button>
          <Button type='submit' disabled={isPending} className='w-fit'>
            {isPending ? (
              <>
                <RotateCw className='mr-2 size-4 animate-spin' />
                <span>Submitting</span>
              </>
            ) : (
              <>{isEdit ? 'Update' : 'Submit'}</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AddQuestionForm
