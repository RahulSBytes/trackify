import { APPLICATION_STATUSES } from '@/constants'

type ActionResponse<T = null> = {
  success: boolean
  data?: T
  error?: {
    message: string
    details?: Record<string, string[]>
  }
  status?: number
}

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number]

interface Application {
  _id: string
  role: string
  dateApplied: string | null
  company: string
  location: string
  mode : string,
  job_description: string
  salery_or_stipend: string
  type: string
  portal: string
  status: ApplicationStatus
  logo: string
}

type ApplicationCardData = Omit<
  Application,
  'job_description' | 'location' | 'salery_or_stipend' | 'portal' | 'location'
>
