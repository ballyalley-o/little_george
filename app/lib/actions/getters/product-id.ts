'use server'

import { connectDb } from '@lib/db'
// @actions
import { scrapeProduct } from '@lib/scraper'
import {
  getAveragePrice,
  getHighestPrice,
  getLowestPrice,
} from '@utils/getters'
// @utils
import { logger } from '@utils'
import { Product } from '@lib/models'

async function getProductById(prodId: string) {
  try {
    connectDb()
    const product = await Product.findOne({ _id: prodId })

    if (!product) return null

    return product
  } catch (error: any) {
    logger.error(error)
  }
}

export default getProductById
