import { ReactNode } from 'react'
import Image from 'next/image'
import SocialAuth from '@/components/forms/SocialAuth'

function layout({ children }: { children: ReactNode }) {
  return (
    <section className='flex h-screen'>
      <section className='flex-center hidden flex-1 flex-col gap-4 md:flex'>
        <h3 className='text-2xl font-semibold text-primary'>
          Your job search, finally under control.
        </h3>
        <p className='text-base text-foreground-muted'>
          Welcome back! Let's keep your job search moving.
        </p>
      </section>
      <section className='flex-center w-lg flex-1 flex-col'>
        <div className='min-w-80'>
          <h3 className='text-xl font-semibold text-primary'>Welcome back</h3>
          <p className='text-base text-foreground-muted'>
            Sign in to pick up where you left off.
          </p>
         <SocialAuth/>
          <div className='my-4 flex w-full items-center'>
            {/* eslint-disable-next-line react/self-closing-comp */}
            <div className='flex-1 border-t border-foreground'></div>
            <span className='px-4 text-sm font-medium whitespace-nowrap text-foreground-muted'>
              or continue with email
            </span>
            {/* eslint-disable-next-line react/self-closing-comp */}
            <div className='flex-1 border-t border-foreground'></div>
          </div>
          {children}
        </div>
      </section>
      <div>
        <Image
          src='/illustrations/circular-blob.svg'
          alt='blob'
          width={0}
          height={0}
          className='absolute bottom-32 left-0 hidden h-58 w-auto opacity-70 sm:block'
        />

        <Image
          src='/illustrations/dotted-blob.svg'
          alt='blob'
          width={0}
          height={0}
          className='absolute right-0 -bottom-7.5 hidden h-60 w-auto opacity-70 sm:block'
        />
      </div>
    </section>
  )
}

export default layout
