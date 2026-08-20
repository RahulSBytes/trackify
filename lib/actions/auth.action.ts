import { ActionResponse, ErrorResponse } from '@/types/global'
import { SignInSchema, signUpSchema } from '../validation'
import handleError from '../handlers/error'
import bcrypt from 'bcrypt'
import { NotFoundError } from '../http-errors'
import { prisma } from '../prisma'
import { signIn } from '@/auth'
import action from '../handlers/action'

export async function signInWithCredentials(
  params: Pick<AuthCredentials, 'email' | 'password'>
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: SignInSchema
  })

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse
  }

  const { email, password } = validationResult.params!

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if (!existingUser) throw new NotFoundError('User')

    const existingAccount = await prisma.account.findFirst({
      where: {
        provider: 'credentials',
        providerAccountId: email
      }
    })
    if (!existingAccount) throw new NotFoundError('Account')

    const passwordMatch = await bcrypt.compare(
      password,
      existingAccount.password as string
    )

    if (!passwordMatch) throw new Error('Invalid password')

    await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    return { success: true }
  } catch (error) {
    return handleError(error) as ErrorResponse
  }
}

export async function signUpWithCredentials(
  params: AuthCredentials
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: signUpSchema
  })

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse
  }

  const { fullname, email, password } = validationResult.params!

  try {
    await prisma.$transaction(async (tx) => {
      const existingUser = await tx.user.findUnique({
        where: {
          email
        }
      })

      if (existingUser) throw new Error('User already exists')

      const hashedPassword = await bcrypt.hash(password, 12)

      const newUser = await tx.user.create({
        data: {
          fullname,
          email,
          password: hashedPassword
        }
      })

      await tx.account.create({
        data: {
          userId: newUser.id,
          provider: 'credentials',
          providerAccountId: email
        }
      })
    })
  } catch (error) {
    return handleError(error) as ErrorResponse
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false
    })
  } catch (error) {
    return handleError(error) as ErrorResponse
  }

  return { success: true }
}
