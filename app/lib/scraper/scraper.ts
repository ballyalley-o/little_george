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
    const title = $('#productTitle').text().trim()
    const currentPrice = extractPrice(
      $('.priceToPay span.a-price-whole'),
      $('a.size.base.a-color-price'),
      $('.a-button-selected .a-color-base'),
      $('.a-price.a-text-price')
    )

    const originalPrice = extractPrice(
      $('#priceblock_ourprice'),
      $('.a-price.a-text-price span.a-offscreen'),
      $('#listPrice'),
      $('#priceblock_dealprice'),
      $('.a-size-base.a-color-price')
    )

    const outOfStock =
      $('#availability span').text().trim().toLowerCase() ===
      'currently unavailable'

    const images =
      $('#imgBlkFront').attr('data-a-dynamic-image') ||
      $('#landingImage').attr('data-a-dynamic-image') ||
      '{}'

    const imgUrls = Object.keys(JSON.parse(images))
    const currency = extractCurrency($('.a-price-symbol'))
    const discountRate = extractDiscountRate($('.savingsPercentage'))
    const description = extractDescription($)

    // build or reconstruct scraped data response
    const data = {
      url,
      currency: currency || '$',
      image: imgUrls[0],
      title,
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      category: 'category',
      reviewsCount: 100,
      stars: 4.5,
      isOutofStock: outOfStock,
      description,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      average: Number(currentPrice) || Number(originalPrice),
    }

    return data
  } catch (error: any) {
    throw new Error(`Failed to scraped product: ${error}`)
  }
}

export default scrapeProduct
