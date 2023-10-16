import React from 'react'
// @components
import Link from 'next/link'
import Image from 'next/image'
// @interfaces
import { ProductProps } from '@interfaces/components'
// @assets
import { ASSET } from '@config'

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Link href={`/products/${product._id}`} className='product-card'>
      <div className='product-card_img-container'>
        <Image
          src={product.image}
          alt={product.title}
          {...ASSET.sizes.product_image}
          className='product-card_img'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='product-title'>{product.title}</h3>
        <div className='flex justify-between'>
          <p className='text-black opacity-50 text-lg capitalize'>
            {product.category}
          </p>
          <p className='text-black text-lg font-semibold'>
            <span>{product?.currency}</span>
            <span>{product?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
