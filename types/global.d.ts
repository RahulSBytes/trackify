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

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;


export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number]

interface Application {
  id: string
  role: string
  dateApplied: string | null
  company: string
  location: string
  mode: string
  jobDescription: string
  salaryOrStipend: string
  type: string
  portal: string
  applicationUrl : string
  applicationDeadline: string | null
  notes: string
  followUpDate: string | null
  status: ApplicationStatus
  logo: string
}

type ApplicationCardData = Omit<
  Application,
  'jobDescription' | 'location' | 'saleryOrStipend' | 'portal' | 'location'
>



type OptionalFieldKey = typeof FIELD_INFO[number]['key'];