'use server'

import { logger } from '@utils'
// @model
import { Product } from '@lib/models'
import { User } from '@types'
// @mailer
import { generateEmailBody } from '@lib/nodemailer'
import sendEmail from '@lib/nodemailer/send-email'

async function addEmailToProduct(productId: string, userEmail: string) {
  try {
    const product = await Product.findById(productId)

    if (!product) return

    const userExists = product.users.some(
      (user: User) => user.email === userEmail
    )

    if (!userExists) {
      product.users.push({ email: userEmail })

      await product.save()

      const emailContent = await generateEmailBody(product, 'WELCOME')

      await sendEmail(emailContent, [userEmail])
    }
    // testing purposes only
    // const emailContent = await generateEmailBody(product, 'CHANGE_OF_STOCK')
    // await sendEmail(emailContent, [userEmail])
  } catch (error: any) {
    logger.error(error)
  }
}

export default addEmailToProduct
