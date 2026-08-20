import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'

async function page() {

  return (
    <section className='relative flex-center flex flex-1 flex-col gap-4 overflow-hidden'>
      <h3 className='text-xl font-medium text-foreground'>
        Your job search, finally under control.
      </h3>
      <p className='text-base text-foreground-muted'>
        Start free. Add your first application in under a minute.
      </p>
      <div className='flex gap-4'>
        <Button className='text-white'>
          <Link href={ROUTES.SIGN_UP}>Get started</Link>
        </Button>

        <Button className='border-primary bg-transparent' variant='outline'>
          How it works
        </Button>
      </div>
      <p className='mt-5 text-sm text-foreground-muted'>
        No credit card. No setup. Just a smarter job search.
      </p>

      <Image
        src='/illustrations/circular-blob.svg'
        alt='blob'
        width={0}
        height={0}
        className='absolute bottom-32 left-0 h-37.5 w-auto opacity-70'
      />

      <Image
        src='/illustrations/dotted-blob.svg'
        alt='blob'
        width={0}
        height={0}
        className='absolute right-0 -bottom-7.5 h-64 w-auto opacity-70'
      />

      <div className='relative -bottom-28 hidden gap-[13vw] md:flex'>
        <Image
          src='/images/home-img-dark.svg'
          alt='preview'
          width={0}
          height={0}
          className='relative right-0 -bottom-5 h-36 w-auto border opacity-70'
        />
        <Image
          src='/images/form-img-dark.svg'
          alt='preview'
          width={0}
          height={0}
          className='relative -bottom-5 h-36 w-auto border opacity-70'
        />
      </div>
    </section>
  )
}

export default page
