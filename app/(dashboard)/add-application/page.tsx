import AddQuestionForm from '@/components/forms/AddApplicationForm'
import React from 'react'

function AddApplication() {
  return (
    <main className='flex h-full w-full max-w-3xl flex-col'>
      <h2 className='text-xl'>Applications</h2>
      <section className='my-6 overflow-auto no-scrollbar'>
        <AddQuestionForm />
      </section>
    </main>
  )
}

export default AddApplication
