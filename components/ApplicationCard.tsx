import { ApplicationCardData } from '@/types/global'
import Image from 'next/image'

function ApplicationCard({
  application: { role, company, dateApplied, type, logo, status }
}: {
  application: ApplicationCardData
}) {
  return (
    <div className='flex-between flex'>
      <div className='flex gap-4 items-center'>
        <div>
          <Image alt={company} src={logo} height={0} width={0} className='h-10 w-10 rounded-sm md:h-12 md:w-12' />
        </div>
        <div className=''>
          <p className='font-medium'>{role}</p>
          <p className='text-sm text-foreground-muted'>
            {`${company}  • ${type} `}{' '}
            <span className='hidden sm:inline'>{`• ${status}`}</span>
          </p>
        </div>
      </div>
      <div className='flex gap-2 w-1/4 md:w-1/5 justify-between'>
        <p className='text-sm text-foreground-muted'>{dateApplied}</p>
        <Image
          alt='arrow'
          height={20}
          width={20}
          src='/icons/arrow-right-dark.svg'
        />
      </div>
    </div>
  )
}

export default ApplicationCard
