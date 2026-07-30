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
  className?: string
  required ?: boolean
}

export default function InputField<T extends FieldValues>({
  children,
  form,
  name,
  label,
  className,
  required = false
}: InputFieldProps<T>) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={`flex w-full flex-col ${className}`}>
            <FormLabel className='text-base'>
              {label} {required && <span className='text-destructive'>*</span>}
            </FormLabel>
            <FormControl>{children(field)}</FormControl>
          </FormItem>
        )}
      />
    </>
  )
}
