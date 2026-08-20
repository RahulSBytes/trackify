import { auth } from '@/auth'
import Navbar from '@/components/navigation/navbar/Navbar'
import RightSidebar from '@/components/RightSidebar'
import ROUTES from '@/constants/routes';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

async function layout({ children }: { children: ReactNode }) {

const session = await auth();
if (!session) redirect(ROUTES.SIGN_IN);

  return (
    <main className='flex h-screen flex-col overflow-hidden'>
      <Navbar />
      <section className='flex min-h-0 flex-1'>
        <div className='flex-center min-h-0 w-full px-8 pt-6'>{children}</div>
        <RightSidebar />
      </section>
    </main>
  )
}

export default layout
