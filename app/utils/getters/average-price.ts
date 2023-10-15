import { PriceHistoryItem } from '@types'

function getAveragePrice(prices: PriceHistoryItem[]) {
  const sumPrices = prices.reduce((acc, curr) => acc + curr.price, 0)
  const averagePrice = sumPrices / prices.length || 0

  return averagePrice
}

export default getAveragePrice
