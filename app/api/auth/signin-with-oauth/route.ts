import { prisma } from '@/lib/prisma'
import slugify from 'slugify'
import { NextResponse } from 'next/server'
import { ValidationError } from '@/lib/errors'
import { handleError } from '@/lib/handlers/error'
import { SignInWithOAuthSchema } from '@/lib/validation'
import { APIErrorResponse } from '@/types/global'
import z from 'zod'

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

    const { name, username, email, image } = user

    const slugifiedUsername = slugify(username, {
      lower: true,
      strict: true,
      trim: true
    })

    await prisma.$transaction(async (tx) => {
      let existingUser = await tx.user.findUnique({ where: { email } })

      if (!existingUser) {
        existingUser = await tx.user.create({
          data: { name, username: slugifiedUsername, email, image }
        })
      } else {
        const updateData: { name?: string; image?: string } = {}

        if (existingUser.name !== name) updateData.name = name
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
          name,
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
