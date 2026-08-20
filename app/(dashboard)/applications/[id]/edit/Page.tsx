import AddApplicationForm from '@/components/forms/AddApplicationForm'
import { Application } from '@/types/global'
import React from 'react'

function Page() {

const dumm = {
    id: '64a7c1b5e4b0f9d8a1c2d3ed',
    role: 'Frontend Developer',
    jobDescription:
      'Build accessible (WCAG compliant) dashboard user interfaces using React, Radix UI, and Tailwind CSS for healthcare clients.',
    company: 'Practo',
    logo: 'https://www.google.com/s2/favicons?domain=practo.com&sz=128',
    dateApplied: '2026-07-18',
    salaryOrStipend: "7.5",
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
    <div>
        <AddApplicationForm application={dumm as Application} isEdit  />
    </div>
  )
}

export default Page