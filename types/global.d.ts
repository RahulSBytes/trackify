type ActionResponse<T = null> = {
  success: boolean
  data?: T
  error?: {
    message: string
    details?: Record<string, string[]>
  }
  status?: number
}

interface ApplicationCard {
  _id: string
  role: string
  company: string
  dateApplied: string
  logo: string
  type: string
  location: string
}
