import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn
} from 'react-hook-form'

interface InputFieldProps<
  T extends FieldValues,
  TName extends Path<T> = Path<T>
> {
  children: (field: ControllerRenderProps<T, TName>) => React.ReactNode
  form: UseFormReturn<T>
  name: TName
  label?: string
  className?: string
  required?: boolean
}

export default function InputField<
  T extends FieldValues,
  TName extends Path<T> = Path<T>
>({
  children,
  form,
  name,
  label = '',
  className,
  required = false
}: InputFieldProps<T, TName>) {
  return (
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
  )
}