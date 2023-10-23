import { NextResponse } from 'next/server'
// @models
import { connectDb } from '@lib/db'
import { Product } from '@lib/models'
import { generateEmailBody } from '@lib/nodemailer'
import sendEmail from '@lib/nodemailer/send-email'
import { scrapeProduct } from '@lib/scraper'
import {
  getAveragePrice,
  getEmailNotification,
  getHighestPrice,
  getLowestPrice,
} from '@utils/getters'
// @globals
import { GLOBAL } from '@config'
// @constants
import { SNACKS } from '@constants'

export const maxDuration = GLOBAL.max_duration
export const dynamic = 'force-dynamic'
export const revalidate = GLOBAL.revalidate

export async function GET(request: Request) {
  try {
    connectDb()

    // scrape and update
    const products = await Product.find({})

    if (!products) throw new Error(SNACKS.error.no_product)

    const updatedProducts = await Promise.all(
      products.map(async (currProduct) => {
        const scrapedProduct = await scrapeProduct(currProduct.url)

        if (!scrapedProduct) throw new Error(SNACKS.error.no_product)

        const updatedPriceHistory = [
          ...currProduct.priceHistory,
          { price: scrapedProduct.currentPrice },
        ]

        const product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        }

        const updatedProduct = await Product.findOneAndUpdate(
          { url: product.url },
          product
        )

        // check status
        const emailNotificationType = getEmailNotification(
          scrapedProduct,
          currProduct
        )

        if (emailNotificationType && updatedProduct.users.length > 0) {
          const productInfo = {
            title: updatedProduct.title,
            url: updatedProduct.url,
          }
          const emailContent = await generateEmailBody(
            productInfo,
            emailNotificationType
          )

          const userEmails = updatedProduct.users.map((user: any) => user.email)

          await sendEmail(emailContent, userEmails)
        }
        return updatedProduct
      })
    )

    return NextResponse.json({
      message: 'Ok',
      data: updatedProducts,
    })
  } catch (error: any) {
    throw new Error(SNACKS.error.get_err(error))
  }
}
