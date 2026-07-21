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
import { EyeOffIcon } from 'lucide-react'

function page() {
  return (
    <FieldGroup className='mt-4'>
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
            type='password'
            placeholder='Enter password'
          />
          <InputGroupAddon align='inline-end'>
            <EyeOffIcon />
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
        <Link href={ROUTES.SIGN_IN} className='text-primary'>
          Sign up
        </Link>{' '}
      </div>
    </FieldGroup>
  )
}

export default page
