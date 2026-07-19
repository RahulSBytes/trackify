import Navbar from '@/components/navigation/navbar/Navbar'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar/>
      <main>{children}</main>
    </main>
  )
}

export default layout
