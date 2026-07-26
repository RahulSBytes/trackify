'use client'
import { topCompanies } from '@/constants/dummydata'
import Image from 'next/image'
import { Badge } from './ui/badge'
import RadialChart  from './RadialChart'
import { PencilLine } from 'lucide-react'

function RightSidebar() {
  interface TopCompany {
    _id: string
    company: string
    logo: string
    count: number
  }

  return (
    <aside className='h-full w-[30vw] min-w-56 border-l-2 p-2 py-5  flex-col hidden md:flex'>
      <div className='h-fit mb-6'>
        <h2 className='text-lg'>Top companies</h2>
        <div className='flex flex-col gap-4 py-4 px-2'>
          {topCompanies.map(({ _id, company, logo, count }: TopCompany) => (
            <div key={_id} className='flex flex-between'>
              <div className='flex gap-3'>
                <Image src={logo} width={20} height={20} alt={company} />
                <p>{company}</p>
              </div>
                <span className='text-sm text-foreground-muted'>{count}</span>
              </div>
          ))}
        </div>
      </div>
      <div className='flex-1 py-2'>
        <h2 className='text-lg'>This week</h2>

      <Badge variant="secondary" className='font-inter px-2 py-1 flex gap-2 mt-2'>
        Target
        <PencilLine data-icon="inline-start" size={12} />
      </Badge>


        <RadialChart/>
      </div>
    </aside>
  )
}

export default RightSidebar
