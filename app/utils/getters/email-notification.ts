import { getLowestPrice } from '@utils/getters'
import { Product } from '@types'

const Notification = {
  WELCOME: 'WELCOME',
  CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
  LOWEST_PRICE: 'LOWEST_PRICE',
  THRESHOLD_MET: 'THRESHOLD_MET',
}

const THRESHOLD_PERCENTAGE = 40

function getEmailNotification(scrapedProd: Product, currProd: Product) {
  const lowestPrice = getLowestPrice(currProd.priceHistory)

  if (scrapedProd.currentPrice < lowestPrice) {
    return Notification.LOWEST_PRICE as keyof typeof Notification
  }

  if (!scrapedProd.isOutOfStock && currProd.isOutOfStock) {
    return Notification.CHANGE_OF_STOCK as keyof typeof Notification
  }

  if (scrapedProd.discountRate > THRESHOLD_PERCENTAGE) {
    return Notification.THRESHOLD_MET as keyof typeof Notification
  }
  return null
}

export default getEmailNotification
