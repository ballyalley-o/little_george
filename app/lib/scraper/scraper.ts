import { GLOBAL } from '@config'
import axios from 'axios'
import * as cheerio from 'cheerio'
// @utils
import { logger } from '@utils'

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
    console.log({ title })
  } catch (error: any) {
    throw new Error(`Failed to scraped product: ${error?.message}`)
  }
}

export default scrapeProduct
