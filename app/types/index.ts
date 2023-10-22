import { ReactNode } from 'react'

export type PriceHistoryItem = {
  price: number
}

export type User = {
  email: string
}

export type Close = {
  w: number | 20
  h: number | 20
}

export type Product = {
  _id?: string
  url: string
  currency: string
  image: string
  title: string
  currentPrice: number
  originalPrice: number
  priceHistory: PriceHistoryItem[] | []
  highestPrice: number
  lowestPrice: number
  averagePrice: number
  discountRate: number
  description: string
  category: string
  reviewsCount: number
  stars: number
  isOutOfStock: Boolean
  users?: User[]
}

export type NotificationTypes =
  | 'WELCOME'
  | 'CHANGE_OF_STOCK'
  | 'LOWEST_PRICE'
  | 'THRESHOLD_MET'

export type EmailContent = {
  subject: string
  body: string
}

export type EmailProductInfo = {
  title: string
  url: string
}

export type Params = {
  params: { id: string }
}
