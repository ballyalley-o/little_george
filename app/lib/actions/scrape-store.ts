'use server'

import { scrapeProduct } from '@lib/scraper'
// @db
import { connectDb } from '@lib/db'
// @assets
import { logger } from '@utils'
import { revalidatePath } from 'next/cache'
// @models
import { Product } from '@lib/models'
// @utils
import {
  getAveragePrice,
  getHighestPrice,
  getLowestPrice,
} from '@utils/getters'

async function scrapeAndStoreProduct(prodUrl: string) {
  if (!prodUrl) return

  try {
    connectDb()
    const scrapedProd = await scrapeProduct(prodUrl)

    if (!scrapeProduct) return

    let product = scrapedProd
    const existingProd = await Product.findOne({ url: scrapedProd?.url })

    if (existingProd) {
      const updatedPriceHistory: any = [
        ...existingProd.priceHistory,
        { price: scrapedProd?.currentPrice },
      ]

      product = {
        ...scrapedProd,
        priceHistory: updatedPriceHistory,
        lowestPrice: getLowestPrice(updatedPriceHistory),
        highestPrice: getHighestPrice(updatedPriceHistory),
        averagePrice: getAveragePrice(updatedPriceHistory),
      }
    }

    const newProd = await Product.findOneAndUpdate(
      { url: scrapedProd?.url },
      product,
      { upsert: true, new: true }
    )

    revalidatePath(`/products/${newProd._id}`)
  } catch (error: any) {
    logger.error(error)
  }
}

export default scrapeAndStoreProduct
