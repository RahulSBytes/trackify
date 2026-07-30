import AddApplicationForm from '@/components/forms/AddApplicationForm'
import React from 'react'

function AddApplication() {
  return (
    <main className='flex h-full w-full max-w-3xl flex-col'>
      <section className='my-6 overflow-auto no-scrollbar'>
        <AddApplicationForm/>
      </section>
    </main>
  )
}

export default AddApplication
