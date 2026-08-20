'use client'

import ApplicationCard from '@/components/ApplicationCard'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { dummyApplications } from '@/constants/dummydata'
import { ApplicationCardData } from '@/types/global'
import { useState } from 'react'

function Application() {
  const [selectedValue, setSelectedValue] = useState<string>('')

  const items = [
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' }
  ]

  return (
    <main className='flex h-full min-h-0 w-full max-w-3xl flex-col'>
      <h2 className='text-xl'>Applications</h2>
      <div className='mt-3 flex w-full gap-4'>
        <Input className='flex-1' />
        <Select value={selectedValue} onValueChange={setSelectedValue}>
          <SelectTrigger>
            <SelectValue placeholder='Sort by' />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <section className='mt-3 no-scrollbar flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pr-2 pb-3 md:gap-6'>
        {dummyApplications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application as ApplicationCardData}
          />
        ))}
      </section>
    </main>
  )
}

export default Application
