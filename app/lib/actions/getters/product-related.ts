'use server'

import { connectDb } from '@lib/db'
// @utils
import { logger } from '@utils'
import { Product } from '@lib/models'

async function getRelatedProduct(productId: string) {
  try {
    connectDb()

    const currentProduct = await Product.findById(productId)

    if (!currentProduct) return null
    const relatedProducts = await Product.find({
      _id: { $ne: productId },
    }).limit(3)

    return relatedProducts
  } catch (error: any) {
    logger.error(error)
  }
}

export default getRelatedProduct
