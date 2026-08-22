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

  if (!params) {
    return { error: 'Invalid application data' }
  }

  const structureddata = {
    userId: session!.user!.id as string,

    role: params.role,
    company: params.company,
    type: params.type,

    logo: params.logo,
    status: params.status,
    mode: params.mode,
    location: params.location,

    salaryMin: params.salaryMin,
    salaryMax: params.salaryMax,
    salaryCurrency: params.salaryCurrency,
    salaryPeriod: params.salaryPeriod,

    portal: params.portal,
    applicationUrl: params.applicationUrl,

    dateApplied: params.dateApplied,
    applicationDeadline: params.applicationDeadline,
    followUpDate: params.followUpDate,

    jobDescription: params.jobDescription,
    notes: params.notes
  }

  try {
    const application = await prisma.application.create({
      data: structureddata
    })
    return { success: true, application }
  } catch (err) {
    console.error(err)
    return { error: 'Failed to create application' }
  }
}
