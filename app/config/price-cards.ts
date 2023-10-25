import { formatNum } from '@utils'

const CARD = {
  curr_price: (product: any, icon: string) => {
    return {
      title: 'Current Price',
      icon: `/assets/icons/${icon}.svg`,
      value: `${product.currency} ${formatNum(product.currentPrice)} `,
      borderColor: 'primary-salmon',
    }
  },
  avg_price: (product: any, icon: string) => {
    return {
      title: 'Average Price',
      icon: `/assets/icons/${icon}.svg`,
      value: `${product.currency} ${formatNum(product.averagePrice)} `,
      borderColor: '#B6DBFF',
    }
  },
  high_price: (product: any, icon: string) => {
    return {
      title: 'Highest Price',
      icon: `/assets/icons/${icon}.svg`,
      value: `${product.currency} ${formatNum(product.highestPrice)} `,
      borderColor: '#BEFFC5',
    }
  },
  low_price: (product: any, icon: string) => {
    return {
      title: 'Lowest Price',
      icon: `/assets/icons/${icon}.svg`,
      value: `${product.currency} ${formatNum(product.lowestPrice)} `,
      borderColor: '#BEFFC5',
    }
  },
}

export default CARD
