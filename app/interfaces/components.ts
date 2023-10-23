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

export interface ModalProps {
  productId: string
}

// form
export interface FormBtn {
  type: any
  label: string
  loading: any
}

export interface FormInput {
  icon: any
  type: string
  label: string
  value: any
  setChange: Function
}
