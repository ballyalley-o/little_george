import { REGEX } from '@constants'

function extractPrice(...elements: any) {
  for (const element of elements) {
    const priceText = element.text().trim()

    if (priceText) {
      const prices = priceText.replace(/[^0-9.]/g, '')
      const pricesArr = prices.split(/(?<=\d\.\d{2})/)

      let initialPrice

      if (prices) {
        initialPrice = prices.match(/\d+\.\d{2}/)?.[0]
      }

      return initialPrice || prices
    }
  }
  return ''
}

export default extractPrice
