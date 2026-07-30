'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '../ui/input'
import { applicationSchema } from '@/lib/validation'
import { RotateCw } from 'lucide-react'
import { Application } from '@/types/global'
import {
  APPLICATION_STATUSES_UI,
  JOB_MODE_OPTIONS,
  JOB_TYPE_OPTIONS
} from '@/constants'
import InputField from './InputField'
import { SelectField } from './SelectField'
import MoreFields from './MoreFields'

interface Params {
  application?: Application
  isEdit?: boolean
}

export default function AddApplicationForm({
  application,
  isEdit = false
}: Params) {
  //   const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      role: '',
      dateApplied: '',
      company: '',
      location: '',
      job_description: '',
      salery_or_stipend: '',
      mode: 'onsite',
      type: 'full_time',
      portal: '',
      status: 'applied',
      logo: ''
    }
  })




  const handleCreateQuestion = async (
    data: z.infer<typeof applicationSchema>
  ) => {
    startTransition(async () => {
      console.log(data)

      // if (isEdit && application) {
      //   const result = await editQuestion({
      //     questionId: question?._id,
      //     ...data
      //   })
      //   if (result.success) {
      //     toast({
      //       title: 'Success ',
      //       description: 'Your question has been updated successfully.'
      //     })
      //     router.push(ROUTES.QUESTION(question?._id))
      //   } else {
      //     toast({
      //       title: `Error (${result.status})`,
      //       description: result.error?.message,
      //       variant: 'destructive'
      //     })
      //   }
      //   return
      // }
      //   const result = await createQuestion(data)
      //   if (result.success) {
      //     toast({
      //       title: 'Success',
      //       description: 'Your question has been posted successfully.'
      //     })
      //     if (result.data) router.push(ROUTES.QUESTION(result.data._id))
      //   } else {
      //     toast({
      //       title: `Error (${result.status})`,
      //       description: result.error?.message,
      //       variant: 'destructive'
      //     })
      //   }
    })
  }

  return (
    <Form {...form}>
      <form
        className='flex w-full flex-col gap-8 overflow-y-auto'
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <div className='flex gap-6' >
          <InputField form={form} name='role' label='Role'>
            {(field) => <Input className='min-h-10 border' {...field} />}
          </InputField>

          <SelectField
            form={form}
            name='type'
            label='Type'
            options={JOB_TYPE_OPTIONS}
          />
        </div>

        <InputField form={form} name='company' label='Company'>
          {(field) => <Input className='min-h-10 border' {...field} />}
        </InputField>

        <div className='flex gap-6'>
          <SelectField
            form={form}
            name='status'
            label='Status'
            options={APPLICATION_STATUSES_UI}
          />

          <InputField className={form.watch("status") !== "wishlist" ? "flex" : "hidden"} form={form} name='dateApplied' label='Date applied'>
            {(field) => (
              <Input type='date' className='min-h-10 border' {...field} />
            )}
          </InputField>
        </div>

        <div className='flex gap-6'>
          <SelectField
            form={form}
            name='mode'
            label='Mode'
            options={JOB_MODE_OPTIONS}
          />

          <InputField className={form.watch("mode") !== "remote" ? "flex" : "hidden"} form={form} name='location' label='Location'>
            {(field) => <Input className='min-h-10 border' {...field} />}
          </InputField>
        </div>

        <div>
          <MoreFields/>
        </div>

        <section className=''>
          <InputField
            form={form}
            name='job_description'
            label='Job description'
          >
            {(field) => (
              <Textarea id='job_description' className='min-h-28' {...field} />
            )}
          </InputField>

          <div className='flex gap-6'>
            <InputField
              form={form}
              name='salery_or_stipend'
              label='Salery / stipend'
            >
              {(field) => (
                  <Input
                    {...field}
                    className='min-h-10 border'
                    placeholder='e.g : 44k, 24lac, 8cr, 12lac-15lac (range)'
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
              )}
            </InputField>
          </div>
          <div className='flex gap-6'>
            <InputField form={form} name='portal' label='Portal'>
              {(field) => (
                  <Input className='min-h-10 border' {...field} />
              )}
            </InputField>

            <InputField form={form} name='portal' label='ApplicationUrl'>
              {(field) => (
                <>
                  <Input className='min-h-10 border' {...field} />
                </>
              )}
            </InputField>
          </div>
        </section>

        <div className='mt-4 flex justify-end gap-4'>
          <Button
            className='border-primary bg-transparent'
            variant='outline'
            onClick={() => form.reset()}
          >
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
