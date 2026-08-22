'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { Path, useForm } from 'react-hook-form' 

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '../ui/input'
import { ApplicationFormInput, applicationSchema } from '@/lib/validation'
import { RotateCw, Sparkle } from 'lucide-react'
import { Application } from '@/types/global'
import {
  APPLICATION_STATUSES,
  CURRENCY_OPTIONS,
  JOB_MODE_OPTIONS,
  JOB_PORTALS_UI,
  JOB_TYPE_OPTIONS,
  SALARY_PERIOD_OPTIONS
} from '@/constants'
import InputField from './InputField'
import { SelectField } from './SelectField'
import MoreFields from './MoreFields'
import { createApplication } from '@/lib/actions/application.action'
import { Checkbox } from '../ui/checkbox'
import { Field, FieldLabel } from '../ui/field'

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



  const form = useForm<ApplicationFormInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      role: application?.role || '',
      dateApplied: application?.dateApplied || new Date().toISOString().split('T')[0],
      company: application?.company || '',
      location: application?.location || '',
      jobDescription: application?.jobDescription || '',
      mode: application?.mode || 'onsite',
      type: application?.type || 'full_time',
      portal: application?.portal || 'other',
      applicationDeadline: application?.applicationDeadline || '',
      notes: application?.notes || '',
      salaryMax : application?.salaryMax || 0,
      salaryMin :application?.salaryMin || 0,
      salaryCurrency :application?.salaryCurrency || 'INR',
      salaryPeriod : application?.salaryPeriod || 'ANNUAL' ,
      isUnpaid : application?.isUnpaid || false,
      applicationUrl: application?.applicationUrl || '',
      followUpDate: application?.followUpDate || '',
      status: application?.status || 'applied',
    }
  })

        console.log(form.formState.errors)


  const [activeFields, setActiveFields] = useState<Set<OptionalFieldKey>>(
    new Set()
  )

  const [isAutofillOpen, setIsAutofillOpen] = useState(false)


  const handleCreateQuestion = async (
    data: ApplicationFormInput
  ) => {
    
    

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

      try {
        
        const result = await createApplication(data);
      } catch (error) {
        console.log(error)
      }


      // if (result.success) {
      //   toast({
      //     title: 'Success',
      //     description: 'Your question has been posted successfully.'
      //   })
      //   if (result.data) router.push(ROUTES.QUESTION(result.data._id))
      // } else {
      //   toast({
      //     title: `Error (${result.status})`,
      //     description: result.error?.message,
      //     variant: 'destructive'
      //   })
      // }
    
  }

type OptionalFieldKey =
  | "applicationDeadline"
  | "notes"
  | "followUpDate"
  | "jobDescription"
  | "applicationUrl"
  | "portal"
  | "salaryOrStipend"

const OPTIONAL_FIELD_GROUPS: Partial<Record<OptionalFieldKey, Path<Application>[]>> = {
  salaryOrStipend: ["salaryMin", "salaryMax", "salaryCurrency", "salaryPeriod", "isUnpaid"],
}

const handleInsert = (newFields: Set<OptionalFieldKey>) => {
  activeFields.forEach((key) => {
    if (!newFields.has(key)) {
      const fieldsToRemove = OPTIONAL_FIELD_GROUPS[key] ?? [key as unknown as Path<Application>]
      fieldsToRemove.forEach((fieldName) => form.unregister(fieldName))
    }
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
            options={APPLICATION_STATUSES}
          />

          <InputField
            className={form.watch('status') !== 'wishlist' ? 'flex' : 'hidden'}
            form={form}
            name='dateApplied'
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

        {activeFields.has('jobDescription') && (
          <InputField form={form} name='jobDescription' label='Job description'>
            {(field) => (
              <Textarea id='job_description' className='min-h-28' {...field} />
            )}
          </InputField>
        )}

        {activeFields.has('notes') && (
          <InputField form={form} name='notes' label='Notes'>
            {(field) => <Textarea id='notes' className='min-h-28' {...field}/>}
          </InputField>
        )}

        {activeFields.has('salaryOrStipend') && (
          <>
          <div className='flex-between'>
            <h3>Salary</h3>
            <InputField form={form} name="isUnpaid" className=' w-fit'>
            {(field) => ( <Field orientation="horizontal" >
              <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(checked)} />
            <FieldLabel htmlFor="unpaid-checkbox">
              Unpaid
          </FieldLabel>
            </Field>
            )}
          </InputField>
          </div>
            <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex gap-6'>

          <InputField
            form={form}
            name='salaryMin'
            label='Min'
          >
            {(field) => (
              <Input
                {...field}
                className='min-h-10'
                value={field.value as number | ''}
                placeholder='200000' type='number'
              />
            )}
          </InputField>
          <InputField
            form={form}
            name='salaryMax'
            label='Max'
          >
            {(field) => (
              <Input
                {...field}
                className='min-h-10'
               value={field.value as number | ''}
                placeholder='600000' type='number'
              />
            )}
          </InputField>
           </div>

           <div className='flex gap-5 flex-1'>

          
          <SelectField
              form={form}
              name='salaryCurrency'
              label='Currency'
              options={CURRENCY_OPTIONS}
            />
            <SelectField
              form={form}
              name='salaryPeriod'
              label='Period'
              options={SALARY_PERIOD_OPTIONS}
            />
             </div>
            </div>
          </>
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

          {activeFields.has('applicationUrl') && (
            <InputField
              form={form}
              name='applicationUrl'
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

        {activeFields.has('applicationDeadline') && (
          <InputField
            form={form}
            name='applicationDeadline'
            label='Application deadline'
          >
            {(field) => (
              <Input {...field} className='min-h-10 border' type='date' />
            )}
          </InputField>
        )}

        {activeFields.has('followUpDate') && (
          <InputField form={form} name='followUpDate' label='Follow-up date'>
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
