import Image from 'next/image'
import Link from 'next/link'
import Theme from './Theme'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import { auth, signOut } from '@/auth'

async function Navbar() {
  const session = await auth()
  // const userId = session?.user?.id;

  console.log(session);

  return (
    <nav className='flex-between p-4'>
      <Link href='/' className='flex'>
        <Image src='/icons/logo.png' width={34} height={34} alt='logo' />
        <p className='font-baumans text-xl font-semibold text-primary'>
          T <span className='text-foreground-muted'>rack</span> ify
        </p>
      </Link>

      <div className='flex gap-3'>
        <Theme />
        {!session ? (
          <div>
            <Button variant='ghost' size='sm'>
              <Link href={ROUTES.SIGN_IN}>Log in</Link>
            </Button>
            <Button className='text-white'>
              <Link href={ROUTES.SIGN_UP}>Sign up</Link>
            </Button>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              type="submit"
              variant='outline' size='sm'
            >
                Log out
            </Button>
          </form>
        )}
      </div>
    </nav>
  )
}

export default Navbar
