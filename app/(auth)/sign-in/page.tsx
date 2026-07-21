'use client'
import { AuthForm } from '@/components/forms/AuthForm'
import { SignInSchema } from '@/lib/validation'

function page() {
  return (
    <AuthForm
      FormType='SIGN_IN'
      schema={SignInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default page
