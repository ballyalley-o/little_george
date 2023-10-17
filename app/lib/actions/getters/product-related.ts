'use server'

import { connectDb } from '@lib/db'
// @utils
import { logger } from '@utils'
import { Product } from '@lib/models'

async function getRelatedProd() {
  try {
    connectDb()
    const products = await Product.find()

    return products
  } catch (error: any) {
    logger.error(error)
  }
}

export default getRelatedProd
