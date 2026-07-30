import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn
} from 'react-hook-form'

interface InputFieldProps<T extends FieldValues> {
  children: (field: ControllerRenderProps<T, Path<T>>) => React.ReactNode
  form: UseFormReturn<T>
  name: Path<T>
  label: string
  className ?: string
}

export default function InputField<T extends FieldValues>({
  children,
  form,
  name,
  label,
  className
}: InputFieldProps<T>) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={`flex w-full flex-col gap-0 ${className}`}>
            <FormLabel className='text-base mb-2'>
              {label}
            </FormLabel>
            <FormControl className=''>{children(field)}</FormControl>
          </FormItem>
        )}
      />
    </>
  )
}
