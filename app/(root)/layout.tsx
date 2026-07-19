import Navbar from '@/components/navigation/navbar/Navbar'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <section className='h-screen flex flex-col'>
        <Navbar />
        {children}
      </section>
    </main>
  )
}

export default layout
