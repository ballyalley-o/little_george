import { GLOBAL } from '@config'
import axios from 'axios'
import * as cheerio from 'cheerio'
// @utils
import {
  logger,
  extractPrice,
  extractCurrency,
  extractDiscountRate,
  extractDescription,
} from '@utils'
// @constants
import { SNACKS, CHEERIO } from '@constants'

async function scrapeProduct(url: string) {
  if (!url) return

  const username = String(GLOBAL.bd_user)
  const password = String(GLOBAL.bd_pass)
  const port = Number(GLOBAL.bd_port)
  const session_id = (1000000 * Math.random()) | 0
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: GLOBAL.bd_host,
    port,
    rejectUnauthorized: false,
  }

  try {
    const resp = await axios.get(url, options)
    const $ = cheerio.load(resp.data)
    const title = $(CHEERIO.title.id).text().trim()
    const currentPrice = extractPrice(CHEERIO.current_price($))
    const originalPrice = extractPrice(CHEERIO.original_price($))
    const outOfStock = CHEERIO.os($)
    const imgUrls = Object.keys(JSON.parse(CHEERIO.images($)))
    const currency = extractCurrency($(CHEERIO.currency.nz))
    const discountRate = extractDiscountRate($(CHEERIO.discountRate.def))
    const description = extractDescription($)

    // build or reconstruct scraped data response
    const data = {
      url,
      currency: currency || GLOBAL.currency,
      image: imgUrls[0],
      title,
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      category: 'category',
      reviewsCount: 100,
      stars: 4.5,
      isOutOfStock: outOfStock,
      description,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
    }
    return data
  } catch (error: any) {
    throw new Error(SNACKS.error.scrape_err(error))
  }
}

export default scrapeProduct
