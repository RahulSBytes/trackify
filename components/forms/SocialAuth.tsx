import { Button } from '../ui/button'
import Image from 'next/image'

function SocialAuth() {
  return (
    <div className='mt-4 flex gap-2'>
      <Button
        variant='social'
        className='flex-1 justify-center gap-3 bg-foreground'
      >
        <Image src='/icons/google.svg' height={16} width={16} alt='google' />
        Google
      </Button>
      <Button variant='social' className='flex-1 justify-center bg-foreground'>
        <Image src='/icons/github.svg' height={20} width={20} alt='github' />
        Github
      </Button>
    </div>
  )
}

export default SocialAuth
