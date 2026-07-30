import { APPLICATION_STATUSES, FIELD_INFO } from '@/constants'

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
  date_applied: string | null
  company: string
  location: string
  mode: string
  job_description: string
  salary_or_stipend: string
  type: string
  portal: string
  application_url : string
  application_deadline: string | null
  notes: string
  follow_up_date: string | null
  status: ApplicationStatus
  logo: string
}

type ApplicationCardData = Omit<
  Application,
  'job_description' | 'location' | 'salery_or_stipend' | 'portal' | 'location'
>



type OptionalFieldKey = typeof FIELD_INFO[number]['key'];