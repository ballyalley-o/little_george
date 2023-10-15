import { PriceHistoryItem } from '@types'

function getLowestPrice(prices: PriceHistoryItem[]) {
  let lowestPrice = prices[0]

  for (let i = 0; i < prices.length; i++) {
    if (prices[i].price < lowestPrice.price) {
      lowestPrice = prices[i]
    }
  }
  return lowestPrice.price
}

export default getLowestPrice
