import { ReactNode } from 'react'
import * as _ from '@assets/styles/product-page'

interface ProductRelated {
  children: ReactNode
  title: string
}

const ProductRelated = ({ children, title }: ProductRelated) => {
  return (
    <>
      <div className={_.StyledRelatedWrapperDiv}>
        <p className={_.StyledRelatedTextDiv}>{title}</p>
        <div className={_.StyledProductCardWrapperMap}>{children}</div>
      </div>
    </>
  )
}

export default ProductRelated
