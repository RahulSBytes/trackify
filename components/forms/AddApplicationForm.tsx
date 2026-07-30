'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '../ui/input'
import { applicationSchema } from '@/lib/validation'
import { RotateCw, Sparkle } from 'lucide-react'
import { Application, OptionalFieldKey } from '@/types/global'
import {
  APPLICATION_STATUSES_UI,
  JOB_MODE_OPTIONS,
  JOB_PORTALS_UI,
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
      role: application?.role ||'',
      date_applied: application?.date_applied ||'',
      company: application?.company ||'',
      location:  application?.location ||'',
      job_description: application?.job_description ||'',
      salary_or_stipend: application?.salary_or_stipend ||'',
      mode: application?.mode || 'onsite',
      type: application?.type || 'full_time',
      portal: application?.portal ||'',
      application_deadline: application?.application_deadline ||'',
      notes: application?.notes ||'',
      application_url: application?.application_url ||'',
      follow_up_date: application?.follow_up_date ||'',
      status: application?.status || 'applied',
      logo: application?.logo ||''
    }
  })

  const [activeFields, setActiveFields] = useState<Set<OptionalFieldKey>>(
    new Set()
  )

  const [isAutofillOpen, setIsAutofillOpen] = useState(false)

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

  const handleInsert = (newFields: Set<OptionalFieldKey>) => {
    activeFields.forEach((key) => {
      if (!newFields.has(key)) form.unregister(key)
    })
    setActiveFields(newFields)
  }

  return (
    <Form {...form}>
      <div className='mb-8 flex-between flex flex-col items-start gap-5 md:flex-row md:items-center'>
        <div>
          <h2 className='pb-1 text-xl'>Add job Application</h2>
          <p className='text-sm text-foreground-muted'>
            Track new role you have applied to.
          </p>
        </div>
        <div className='flex flex-row-reverse gap-4'>
          {!isAutofillOpen && (
            <Button onClick={() => setIsAutofillOpen((prev) => !prev)}>
              Autofill with JD <Sparkle size={7} />
            </Button>
          )}
          <MoreFields activeFields={activeFields} onInsert={handleInsert} />
        </div>
      </div>

      {isAutofillOpen && (
        <div className='mb-4 flex flex-col'>
          <Textarea className='mb-3 min-h-28' />
          <div className='flex gap-3 self-end'>
            <Button
              variant='outline'
              className='self-end px-4'
              onClick={() => setIsAutofillOpen(false)}
            >
              Close
            </Button>
            <Button className='self-end px-4'>Parser</Button>
          </div>
        </div>
      )}
      <form
        className='flex w-full flex-col gap-6 overflow-y-auto'
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <div className='flex gap-6'>
          <InputField form={form} name='role' label='Role' required>
            {(field) => <Input className='min-h-10 border' {...field} />}
          </InputField>

          <SelectField
            form={form}
            name='type'
            label='Type'
            options={JOB_TYPE_OPTIONS}
            required
          />
        </div>

        <InputField form={form} name='company' label='Company' required>
          {(field) => <Input className='min-h-10 border' {...field} />}
        </InputField>

        <div className='flex gap-6'>
          <SelectField
            form={form}
            name='status'
            label='Status'
            options={APPLICATION_STATUSES_UI}
          />

          <InputField
            className={form.watch('status') !== 'wishlist' ? 'flex' : 'hidden'}
            form={form}
            name='date_applied'
            label='Date applied'
          >
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

          <InputField
            className={form.watch('mode') !== 'remote' ? 'flex' : 'hidden'}
            form={form}
            name='location'
            label='Location'
          >
            {(field) => <Input className='min-h-10 border' {...field} />}
          </InputField>
        </div>

        {activeFields.has('job_description') && (
          <InputField
            form={form}
            name='job_description'
            label='Job description'
          >
            {(field) => (
              <Textarea id='job_description' className='min-h-28' {...field} />
            )}
          </InputField>
        )}

        {activeFields.has('notes') && (
          <InputField form={form} name='notes' label='Notes'>
            {(field) => <Textarea id='notes' className='min-h-28' {...field} />}
          </InputField>
        )}

        {activeFields.has('salary_or_stipend') && (
          <InputField
            form={form}
            name='salary_or_stipend'
            label='Salary / stipend'
          >
            {(field) => (
              <Input
                {...field}
                className='min-h-10 border'
                placeholder='e.g : 44k, 24lac, 8cr, 12lac-15lac (range)'
              />
            )}
          </InputField>
        )}

        <div className='flex gap-6'>
          {activeFields.has('portal') && (
            <SelectField
              form={form}
              name='portal'
              label='Portal'
              options={JOB_PORTALS_UI}
            />
          )}

          {activeFields.has('application_url') && (
            <InputField
              form={form}
              name='application_url'
              label='Application Url'
            >
              {(field) => (
                <>
                  <Input className='min-h-10 border' {...field} />
                </>
              )}
            </InputField>
          )}
        </div>

        {activeFields.has('application_deadline') && (
          <InputField
            form={form}
            name='application_deadline'
            label='Application deadline'
          >
            {(field) => (
              <Input {...field} className='min-h-10 border' type='date' />
            )}
          </InputField>
        )}

        {activeFields.has('follow_up_date') && (
          <InputField form={form} name='follow_up_date' label='Follow-up date'>
            {(field) => (
              <Input {...field} className='min-h-10 border' type='date' />
            )}
          </InputField>
        )}

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
