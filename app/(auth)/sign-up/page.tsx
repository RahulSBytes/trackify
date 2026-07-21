'use client'

import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '@/components/ui/input-group'
import { Eye, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

function Signup() {
  const [visible, setVisible] = useState(false)

  return (
    <FieldGroup className='mt-4'>
      <Field>
        <FieldLabel htmlFor='fieldgroup-email'>Name</FieldLabel>
        <Input id='fieldgroup-email' type='text' placeholder='Jhon doe' />
      </Field>
      <Field>
        <FieldLabel htmlFor='fieldgroup-email'>Email</FieldLabel>
        <Input
          id='fieldgroup-email'
          type='email'
          placeholder='name@example.com'
        />
      </Field>

      <Field className='max-w-sm'>
        <FieldLabel htmlFor='inline-end-input'>Password</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id='inline-end-input'
            type={visible ? 'text' : 'password'}
            placeholder='Enter password'
          />
          <InputGroupAddon align='inline-end'>
           
            <button
              type='button'
              className='z-10 p-1'
              onClick={() => setVisible(!visible)}
            >
              {visible ? <EyeOffIcon size={20} /> : <Eye size={20} />}
            </button>
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <Field orientation='horizontal'>
        <Button type='submit' className='w-full'>
          Sign in
        </Button>
      </Field>
      <div className='self-center text-sm'>
        Already have an account?{' '}
        <Link href={ROUTES.SIGN_UP} className='text-primary'>
          Sign up
        </Link>{' '}
      </div>
    </FieldGroup>
  )
}

export default Signup
