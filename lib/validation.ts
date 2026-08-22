import {
  APPLICATION_STATUSES,
  CURRENCY_OPTIONS,
  JOB_MODE_OPTIONS,
  JOB_TYPE_OPTIONS,
  SALARY_PERIOD_OPTIONS
} from '@/constants'
import { ApplicationStatus, Currency, JobMode, JobType, SalaryPeriod } from '@/types/global'
import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.email('Enter a valid email address.').min(1, 'Email is required'),
  password: z
    .string()
    .min(6, { message: 'Password must be less than 6 characters.' })
    .max(100, { message: 'Password cannot exceed 100 characters.' })
})

export const signUpSchema = z.object({
  fullname: z
    .string()
    .min(1, 'Name is required')
    .max(30, 'Name must not exceed 30 characters')
    .regex(/^[a-zA-Z ]+$/, 'Name should contain letters and spaces only'),

  email: z.email('Enter a valid email address.').min(1, 'Email is required'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must not exceed 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
})

export const applicationSchema = z.object({
  type: z.enum(JOB_TYPE_OPTIONS.map((O) => O.value) as [JobType, ...JobType[]]),
  role: z.string().min(1, 'Role is required'),
  company: z.string().min(1, 'Company is required'),

  status: z.enum(
    APPLICATION_STATUSES.map((O) => O.value) as [
      ApplicationStatus,
      ...ApplicationStatus[]
    ]
  ),
  dateApplied: z.string(),

  mode: z.enum(JOB_MODE_OPTIONS.map((O) => O.value) as [JobMode, ...JobMode[]]),

  location: z
    .string()
    .optional()
    .transform((v) => (v === '' ? undefined : v)),
  applicationDeadline: z.string(),
  notes: z
    .string()
    .optional()
    .transform((v) => (v === '' ? undefined : v)),
  followUpDate: z.string(),
  jobDescription: z
    .string()
    .optional()
    .transform((v) => (v === '' ? undefined : v)),
  salaryMin: z.coerce.number().optional(),
  salaryMax: z.coerce.number().optional(),
  isUnpaid: z.boolean().default(false),
  salaryCurrency: z.enum(
    CURRENCY_OPTIONS.map((o) => o.value) as [Currency, ...Currency[]]
  ),
  salaryPeriod: z.enum(
    SALARY_PERIOD_OPTIONS.map((o) => o.value) as [SalaryPeriod, ...SalaryPeriod[]]
  ),
  applicationUrl: z
    .string()
    .optional()
    .transform((v) => (v === '' ? undefined : v)),
  portal: z.string(),
  logo: z.string().optional()
})

export  type ApplicationFormInput = z.input<typeof applicationSchema> // data before validation transformation applied
export type ApplicationFormData = z.output<typeof applicationSchema> // data after validation same as z.output<typeof applicationSchema>

export const SignInWithOAuthSchema = z.object({
  provider: z.enum(['github', 'google']),
  providerAccountId: z.string().min(1, 'Provider account ID is required'),
  user: z.object({
    name: z.string().min(1, 'Name is required'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    image: z.string().url('Invalid image URL').optional()
  })
})
