import { Product } from '@types'

export interface ProductProps {
  product: Product
}

export interface PriceInfo {
  title: string
  icon: string
  value: string
  borderColor: string
}
