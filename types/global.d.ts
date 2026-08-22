import {
  APPLICATION_STATUSES,
  CURRENCY_OPTIONS,
  FIELD_INFO,
  JOB_MODE_OPTIONS,
  JOB_TYPE_OPTIONS,
  SALARY_PERIOD_OPTIONS
} from '@/constants'

type ActionResponse<T = null> = {
  success: boolean
  data?: T
  error?: {
    message: string
    details?: Record<string, string[]>
  }
  status?: number
}

type SuccessResponse<T = null> = ActionResponse<T> & { success: true }
type ErrorResponse = ActionResponse<undefined> & { success: false }

type APIErrorResponse = NextResponse<ErrorResponse>
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>

export type Currency = (typeof CURRENCY_OPTIONS)[number]['value']
export type SalaryPeriod = (typeof SALARY_PERIOD_OPTIONS)[number]['value']
export type JobType = (typeof JOB_TYPE_OPTIONS)[number]['value']
export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number]['value']
export type JobMode = (typeof JOB_MODE_OPTIONS)[number]['value']


interface Application {
  role: string
  dateApplied: string | null
  company: string
  location: string
  mode: JobMode
  jobDescription: string
  salaryMin: number | null
  salaryMax: number | null
  salaryCurrency: Currency | null
  salaryPeriod: SalaryPeriod | null
  isUnpaid: boolean
  type: JobType
  portal: string
  applicationUrl: string
  applicationDeadline: string | null
  notes: string
  followUpDate: string | null
  status: ApplicationStatus
}

type ApplicationCardData = Omit<
  Application,
  'jobDescription' | 'location' | 'saleryOrStipend' | 'portal' | 'location'
>

type OptionalFieldKey = (typeof FIELD_INFO)[number]['key']
