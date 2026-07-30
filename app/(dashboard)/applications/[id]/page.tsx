import { Alert } from '@/components/card/Alert'
import InfoCard from '@/components/card/InfoCard'
import { Badge } from '@/components/ui/badge'
import { PencilLine } from 'lucide-react'
import Image from 'next/image'

function ApplicationDetail() {
  const jobDetails = {
    Location: 'Remote',
    Type: 'part-time',
    Mode: 'remote',
    'Salary Or Stipend': 7.5
  }

  const importantDates = {
    'Date Applied': '2026-07-18',
    'Application Deadline': '2026-08-05',
    'follow-up Date': '2026-08-10'
  }

  const applicationInformation = {
    portal: 'Indeed',
    applicationUrl: 'https://www.indeed.com/viewjob?jk=practo-frontend-dev-2026'
  }

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
    location: 'Remote',
    mode: 'remote',
    status: 'Interviewing',
    applicationDeadline: '2026-08-05',
    applicationUrl:
      'https://www.indeed.com/viewjob?jk=practo-frontend-dev-2026',
    followUpDate: '2026-08-10',
    notes:
      'Recruiter mentioned 3 rounds — DSA screen, pb-14 my- Recruiter mentioned 3 rounds — DSA screen, system design, culture fit. Ask about remote stipend for equipment.system design, culture fit. Ask about remote stipend for equipment.Recruiter mentioned 3 rounds — DSA screen, system design, culture fit. Ask about remote stipend for equipment.Recruiter mentioned 3 rounds — DSA screen, system design, culture fit. Ask about remote stipend for equipment.Recruiter mentioned 3 rounds — DSA screen, system design, culture fit. Ask about remote stipend for equipment.'
  }

  return (
    <main className='h-full min-h-0 w-full max-w-3xl flex-1'>
      <div className='flex-between gap-3 pb-2'>
        <h2 className='text-xl'>Application</h2>
        <div className='flex gap-4'>
          <Badge
            variant='secondary'
            className='mt-2 flex gap-2 px-4 py-1 font-inter text-sm'
          >
            Edit
            <PencilLine data-icon='inline-start' size={12} />
          </Badge>
          <Alert />
        </div>
      </div>
      <section className='my-5 no-scrollbar h-full overflow-auto'>
        <div className='flex-between rounded-md border p-4'>
          <div className='flex gap-4'>
            <Image
              alt={dumm.company}
              src={dumm.logo}
              height={0}
              width={0}
              className='h-10 w-10 rounded-sm md:h-12 md:w-12'
            />
            <div>
              <p className='text-lg font-medium'>{dumm.role}</p>
              <p className='text-sm font-semibold text-foreground-muted'>
                {`${dumm.company}  • ${dumm.type}`}
              </p>
            </div>
          </div>
          <Badge className='self-start text-sm text-white'>
            {dumm.status}
          </Badge>
          {/* <div ></div> */}
        </div>

        {/*  */}
        <InfoCard heading='Job Details' data={jobDetails} />
        <InfoCard heading='Important Dates' data={importantDates} />
        <InfoCard
          heading='Application Information'
          data={applicationInformation}
        />

        {/*  */}
        <div className='my-8 flex flex-col gap-8 pb-14'>
          <div>
            <h3 className='mb-2 text-lg'>Job description</h3>
            <p className='text-foreground-muted'>{dumm.jobDescription}</p>
          </div>

          <div>
            <h3 className='text-lg'>Notes</h3>
            <div className='text-foreground-muted'>{dumm.notes}</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ApplicationDetail
