import { APPLICATION_STATUSES } from '@/constants'
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
  role: z.string(),
  date_applied: z.string(),
  application_deadline: z.string(),
  notes: z.string(),
  follow_up_date: z.string(),
  company: z.string(),
  mode: z.string(),
  location: z.string(),
  job_description: z.string(),
  salary_or_stipend: z.string(),
  type: z.string(),
  application_url :  z.string(),
  portal: z.string(),
  status: z.enum(APPLICATION_STATUSES),
  logo: z.string()
})
