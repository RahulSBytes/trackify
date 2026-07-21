'use client'

import { AuthForm } from '@/components/forms/AuthForm'
import { signUpSchema } from '@/lib/validation'

function Signup() {
  return (
    <AuthForm
      FormType='SIGN_UP'
      schema={signUpSchema}
      defaultValues={{ fullname: '', email: '', password: '' }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default Signup
