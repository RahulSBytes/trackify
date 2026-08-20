import ROUTES from '@/constants/routes'
import { ApplicationCardData } from '@/types/global'
import Image from 'next/image'
import Link from 'next/link'

function ApplicationCard({
  application: { id, role, company, dateApplied, type, logo, status }
}: {
  application: ApplicationCardData
}) {
  return (
    <Link href={ROUTES.APPLICATION(id)} className='flex-between flex'>
      <div className='flex items-center gap-4'>
        <div>
          <Image
            alt={company}
            src={logo}
            height={0}
            width={0}
            className='h-10 w-10 rounded-sm md:h-12 md:w-12'
          />
        </div>
        <div className=''>
          <p className='font-medium'>{role}</p>
          <p className='text-sm text-foreground-muted'>
            {`${company}  • ${type} `}{' '}
            <span className='hidden sm:inline'>{`• ${status}`}</span>
          </p>
        </div>
      </div>
      <div className='flex w-1/4 justify-between gap-2 md:w-1/5'>
        <p className='text-sm text-foreground-muted'>{dateApplied}</p>
        <Image
          alt='arrow'
          height={20}
          width={20}
          src='/icons/arrow-right-dark.svg'
        />
      </div>
    </Link>
  )
}

export default ApplicationCard
