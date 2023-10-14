'use server'

import { scrapeProduct } from '@lib/scraper'

async function scrapeAndStoreProduct(prodUrl: string) {
  if (!prodUrl) return
  try {
    const scrapedProd = await scrapeProduct(prodUrl)
  } catch (error: any) {
    throw new Error(`Failed to Create/Update Product`)
  }
}

export default scrapeAndStoreProduct
