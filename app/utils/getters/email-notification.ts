import { getLowestPrice } from '@utils/getters'
import { Product } from '@types'
// @constants
import { NOTIFICATION } from '@constants'

const THRESHOLD_PERCENTAGE = 40

function getEmailNotification(scrapedProd: Product, currProd: Product) {
  const lowestPrice = getLowestPrice(currProd.priceHistory)

  if (scrapedProd.currentPrice < lowestPrice) {
    return NOTIFICATION.LOWEST_PRICE as keyof typeof NOTIFICATION
  }

  if (!scrapedProd.isOutOfStock && currProd.isOutOfStock) {
    return NOTIFICATION.CHANGE_OF_STOCK as keyof typeof NOTIFICATION
  }

  if (scrapedProd.discountRate > THRESHOLD_PERCENTAGE) {
    return NOTIFICATION.THRESHOLD_MET as keyof typeof NOTIFICATION
  }
  return null
}

export default getEmailNotification
