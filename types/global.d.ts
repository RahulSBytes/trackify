import {
  APPLICATION_STATUSES,
  CURRENCY_OPTIONS,
  FIELD_INFO,
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

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number]

type Currency = (typeof CURRENCY_OPTIONS)[number]['value']
type SalaryPeriod = (typeof SALARY_PERIOD_OPTIONS)[number]['value']

interface Application {
  role: string
  dateApplied: string | null
  company: string
  location: string
  mode: string
  jobDescription: string
  salaryMin: number | null
  salaryMax: number | null
  salaryCurrency: Currency | null
  salaryPeriod: SalaryPeriod | null
  isUnpaid: boolean
  type: string
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
