import Image from 'next/image'

function ApplicationCard({
  application: {
    role,
    jobDescription,
    company,
    dateApplied,
    salaryOrStipend,
    portal,
    type,
    logo,
    location
  }
}: {
  application: Application
}) {
  return (
    <div className='flex flex-between'>
      <div>
        <Image alt={company} src={logo} height={30} width={30} />
      </div>
      <div>
        <p className='font-medium'>{role}</p>
        <p className='text-sm text-foreground-muted'>{`${company} • ${location}`}</p>
      </div>
      <p className='hidden sm:inline'>{type}</p>
      <p className='text-sm text-foreground-muted'>{dateApplied}</p>
      <Image alt='arrow' height={20} width={20} src="/icons/arrow-right-dark.svg"/>
    </div>
  )
}

export default ApplicationCard
