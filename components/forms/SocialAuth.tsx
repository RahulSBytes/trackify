"use client"
import { signIn } from 'next-auth/react';
import { Button } from '../ui/button'
import Image from 'next/image'
import { toast } from 'sonner'
import ROUTES from '@/constants/routes'

function SocialAuth() {

  async function handleSubmit(provider: 'github' | 'google') {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true
      })


    

    } catch (error) {
      toast.error('Sign in failed', {
        description:
          error instanceof Error
            ? error.message
            : 'an error occurred during sign-in',
        position: 'bottom-right'
      })
    }
  }

  return (
    <div className='mt-4 flex gap-2'>
      <Button
        variant='social'
        className='flex-1 justify-center gap-3 bg-foreground'
        onClick={() => handleSubmit('google')}
      >
        <Image src='/icons/google.svg' height={16} width={16} alt='google' />
        Google
      </Button>
      <Button
        variant='social'
        className='flex-1 justify-center bg-foreground'
        onClick={() => handleSubmit('github')}
      >
        <Image src='/icons/github.svg' height={20} width={20} alt='github' />
        Github
      </Button>
    </div>
  )
}

export default SocialAuth
