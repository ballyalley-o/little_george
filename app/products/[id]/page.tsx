import React from 'react'
// @components
import { PriceInfoCard, ProductIcon } from '@components/Product'
import {
  ProductCard,
  Modal,
  ProductRelated,
  ProductButton,
  ProductAmazonBtn,
  ProductShenanigans,
} from '@components'
import * as _ from '@assets/styles/product-page'
// @types
import Image from 'next/image'
import Link from 'next/link'
import { Params, Product } from '@types'
import { getProductById, getRelatedProduct } from '@lib/actions/getters'
import { redirect } from 'next/navigation'
// @assets
import { AiFillAmazonCircle } from 'react-icons/ai'
// @globals
import { ASSET, CARD } from '@config'
// @constant
import { TITLE, PATH } from '@constants'
// @utils
import { formatNum } from '@utils'

const page = async ({ params: { id } }: Params) => {
  const product: Product = await getProductById(id)

  if (!product) redirect('/')
  const relatedProducts = await getRelatedProduct(id)

  return (
    <div className={_.StyledContainerDiv}>
      <div className={_.StyledWrapperDiv}>
        <div className={_.StyledImageDiv}>
          <Image
            src={product.image}
            alt={product.title}
            {...ASSET.sizes.product_detail}
            className={_.StyledImage}
          />
        </div>
        <div className={_.StyledFlexContainerDiv}>
          <div className={_.StyledContainer2Div}>
            <ProductAmazonBtn product={product} />
            <ProductIcon product={product} />
          </div>
          <div className={_.StyledProductInfoDiv}>
            <ProductShenanigans product={product} />
          </div>
          <div className={_.StyledCardContainerDiv}>
            <div className={_.StyledCardWrapperDiv}>
              <PriceInfoCard {...CARD.curr_price(product, 'chart')} />
              <PriceInfoCard {...CARD.avg_price(product, 'chart')} />
              <PriceInfoCard {...CARD.high_price(product, 'arrow-up')} />
              <PriceInfoCard {...CARD.low_price(product, 'arrow-down')} />
            </div>
          </div>
          <Modal productId={id} />
        </div>
      </div>
      <ProductButton product={product} />
      {relatedProducts && relatedProducts?.length > 0 && (
        <ProductRelated title={TITLE.related}>
          {relatedProducts.map((product, index) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductRelated>
      )}
    </div>
  )
}

export default page
