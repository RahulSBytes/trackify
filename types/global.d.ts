type ActionResponse<T = null> = {
  success: boolean
  data?: T
  error?: {
    message: string
    details?: Record<string, string[]>
  }
  status?: number
}

interface Application {
  _id: string
  role: string
  jobDescription: string
  company: string
  dateApplied: string
  salaryOrStipend: number
  portal: string
  logo: string
  type: string
  location: string
}
