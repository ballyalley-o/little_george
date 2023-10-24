import React from 'react'
// @components
import Link from 'next/link'
import Image from 'next/image'
// @styles
import * as _ from '@assets/styles/product'
// @interfaces
import { ProductProps } from '@interfaces/components'
// @assets
import { ASSET } from '@config'
// @constants
import { PATH } from '@constants'

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Link href={PATH.product(product)} className={_.StyledWrapperLink}>
      <div className={_.StyledWrapperDiv}>
        <Image
          src={product.image}
          alt={product.title}
          {...ASSET.sizes.product_image}
          className={_.StyledProductImage}
        />
      </div>
      <div className={_.StyledProductDiv}>
        <h3 className={_.StyledProductTitleH3}>{product.title}</h3>
        <div className={_.StyledContentDiv}>
          <p className={_.StyledCategoryP}>{product.category}</p>
          <p className={_.StyledProductPriceP}>
            <span>{product?.currency}</span>
            <span>{product?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
