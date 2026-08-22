'use server'

import z, { ZodType } from 'zod'
import type { Session } from 'next-auth'
import { auth } from '@/auth'
import { UnauthorizedError, ValidationError } from '../http-errors'

type ActionOptions<T extends ZodType> = {
  params?: unknown
  schema?: T
  authorize?: boolean
}

export default async function action<T extends ZodType>({
  params,
  schema,
  authorize = false
}: ActionOptions<T>) {
  let parsedParams: z.infer<T> | undefined

  if (schema && params) {
    const result = schema.safeParse(params)
    if (!result.success) {
      const errors = z.flattenError(result.error)
      return new ValidationError(errors.fieldErrors as Record<string, string[]>)
    }
    parsedParams = result.data
  }

  let session: Session | null = null
  if (authorize) {
    session = await auth()
    if (!session) {
      return new UnauthorizedError()
    }
  }

  return { params: parsedParams, session }
}