import { REGEX } from '@constants'

function extractPrice(...elements: any) {
  for (const element of elements) {
    const priceText = element.text().trim()

    if (priceText) {
      const prices = priceText.replace(/[^0-9.]/g, '')
      const pricesArr = prices.split(/(?<=\d\.\d{2})/)

      return pricesArr
    }
  }
  return ''
}

export default extractPrice
