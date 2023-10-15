import { PriceHistoryItem } from '@types'

function getHighestPrice(prices: PriceHistoryItem[]) {
  let topPrice = prices[0]

  for (let i = 0; i < prices.length; i++) {
    if (prices[i].price > topPrice.price) {
      topPrice = prices[i]
    }
  }

  return topPrice.price
}

export default getHighestPrice
