import Navbar from '@/components/navigation/navbar/Navbar'
import RightSidebar from '@/components/RightSidebar'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
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
