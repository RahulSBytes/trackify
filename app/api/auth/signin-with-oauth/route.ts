import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { SignInWithOAuthSchema } from '@/lib/validation'
import { APIErrorResponse } from '@/types/global'
import z from 'zod'
import { ValidationError } from '@/lib/http-errors'
import handleError from '@/lib/handlers/error'

export async function POST(request: Request) {
  const { provider, providerAccountId, user } = await request.json()

  try {
    const validatedData = SignInWithOAuthSchema.safeParse({
      provider,
      providerAccountId,
      user
    })

    if (!validatedData.success) {
      const { fieldErrors } = z.flattenError(validatedData.error)
      throw new ValidationError(fieldErrors)
    }

    const { fullname, email, image } = user

    await prisma.$transaction(async (tx) => {
      let existingUser = await tx.user.findUnique({ where: { email } })

      if (!existingUser) {
        existingUser = await tx.user.create({
          data: { fullname, email, image }
        })
      } else {
        const updateData: { fullname?: string; image?: string } = {}

        if (existingUser.fullname !== fullname) updateData.fullname = fullname
        if (existingUser.image !== image) updateData.image = image

        if (Object.keys(updateData).length > 0) {
          await tx.user.update({
            where: { id: existingUser.id },
            data: updateData
          })
        }
      }

      await tx.account.upsert({
        where: {
          provider_providerAccountId: { provider, providerAccountId }
        },
        update: {},
        create: {
          userId: existingUser.id,
          fullname,
          image,
          provider,
          providerAccountId
        }
      })
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    return handleError(err, 'api') as APIErrorResponse
  }
}
