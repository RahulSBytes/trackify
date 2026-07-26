import { Badge } from '@/components/ui/badge'
import { PencilLine, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function ApplicationDetail() {
  const dumm = {
    _id: '64a7c1b5e4b0f9d8a1c2d3ed',
    role: 'Frontend Developer',
    jobDescription:
      'Build accessible (WCAG compliant) dashboard user interfaces using React, Radix UI, and Tailwind CSS for healthcare clients.',
    company: 'Practo',
    logo: 'https://www.google.com/s2/favicons?domain=practo.com&sz=128',
    dateApplied: '2026-07-18',
    salaryOrStipend: 7.5,
    portal: 'Indeed',
    type: 'part-time',
    location: 'Remote'
  }

  return (
    <main className='h-full min-h-0 w-full max-w-3xl'>
      <h2 className='text-xl'>Applications</h2>
      <div className='flex gap-3'>
        <Badge
          variant='secondary'
          className='mt-2 flex gap-2 px-4 py-1 font-inter text-sm'
        >
          Edit
          <PencilLine data-icon='inline-start' size={12} />
        </Badge>
        <Badge
          variant='secondary'
          className='mt-2 flex gap-2 px-3 py-1 font-inter text-sm'
        >
          Delete
          <Trash data-icon='inline-start' size={12} />
        </Badge>
      </div>
      <section className='my-5'>
        <div className='my-10 flex-between border p-4 rounded-md'>
          <div className='flex items-center gap-4'>
            <div>
              <Image
                alt={dumm.company}
                src={dumm.logo}
                height={0}
                width={0}
                className='h-10 w-10 rounded-sm md:h-12 md:w-12'
              />
            </div>
            <div>
              <p className='text-lg font-medium'>{dumm.role}</p>
              <p className='text-sm font-semibold text-foreground-muted'>
                {`${dumm.company}  • ${dumm.type} • ${dumm.location}`}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-end'>
            <p className='text-sm text-foreground-muted'>{dumm.dateApplied}</p>
            <p className='text-sm text-foreground-muted'>
              {dumm.salaryOrStipend}LPA
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <h3 className='text-lg'>Portal</h3>
            <Link href={dumm.portal} className='text-foreground-muted'>
              {dumm.portal}
            </Link>
          </div>

          <div>
            <h3 className='mb-2 text-lg'>Job description</h3>
            <p className='text-foreground-muted'>{dumm.jobDescription}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ApplicationDetail
