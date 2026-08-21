'use server'

import { ErrorResponse } from '@/types/global'
import action from '../handlers/action'
import handleError from '../handlers/error'
import { applicationSchema, ApplicationFormInput } from '../validation'
import { prisma } from '../prisma'

export async function createApplication(data: ApplicationFormInput) {
  const validationResult = await action({
    params: data,
    schema: applicationSchema,
    authorize: true
  })

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse
  }

  const { params, session } = validationResult;



  try {
    const application = await prisma.application.create({
      data : {
        ...params,
        userId : session!.user!.id as string
      }
    })
    return { success: true, application }
  } catch (err) {
    console.error(err)
    return { error: 'Failed to create application' }
  }
}
