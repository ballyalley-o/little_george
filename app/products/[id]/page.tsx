import React from 'react'
// @components
import { PriceInfoCard, ProductDetails } from '@components/Product'
import { ProductCard } from '@components'
// @types
import Image from 'next/image'
import Link from 'next/link'
import { Params, Product } from '@types'
import { getProductById, getRelatedProduct } from '@lib/actions/getters'
import { relatedProducts } from '@lib/actions'
import { redirect } from 'next/navigation'
// @assets
import { AiFillAmazonCircle } from 'react-icons/ai'
// @globals
import { ASSET } from '@config'
// @utils
import { formatNum } from '@utils'

const page = async ({ params: { id } }: Params) => {
  const product: Product = await getProductById(id)

  if (!product) redirect('/')
  const relatedProducts = await getRelatedProduct(id)

  return (
    <div className='product-container'>
      <div className='flex gap-28 xl:flex-row flex-col'>
        <div className='product-image'>
          <Image
            src={product.image}
            alt={product.title}
            {...ASSET.sizes.product_detail}
            className='mx-auto'
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='flex justify-between items-start gap-5 flex-wrap pb-6'>
            <div className='flex flex-col gap-3'>
              <p className='text-[28px] text-secondary font-semibold'>
                {product.title}
              </p>

              <Link
                href={product.url}
                target='_blank'
                className='text-base text-black opacity-50 flex'
              >
                Go to Amazon <AiFillAmazonCircle />
              </Link>
            </div>
            <div className='flex items-center gap-3'>
              <div className='product-hearts'>
                <Image {...ASSET.heart_icon} />
                <p className='text-base font-semibold text-[#D46F77]'>
                  {product.reviewsCount}
                </p>
              </div>
              <div className='p-2 bg-white-200 rounded-10'>
                <Image {...ASSET.bookmark_icon} />
              </div>
              <div className='p-2 bg-white-200 rounded-10'>
                <Image {...ASSET.share_icon} />
              </div>
            </div>
          </div>
          <div className='product-info'>
            <div className='flex flex-col gap-2'>
              <p className='text-[34] text-second font-bold'>
                {product.currency}
                {formatNum(product.currentPrice)}
              </p>
              <p className='text-[21] text-black opacity-50 line-through'>
                {product.currency}
                {formatNum(product.originalPrice)}
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <div className='product-stars'>
                  <Image {...ASSET.star_icon} />
                  <p className='text-sm text-primary-orange font-semibold'>
                    {product.stars || '25'}
                  </p>
                </div>
                <div className='product-reviews'>
                  <Image {...ASSET.comment_icon} />
                  <p className='text-sm text-secondary font-semibold'>
                    {product.reviewsCount} Reviews
                  </p>
                </div>
              </div>
              <p className='text-sm text-black opacity-50'>
                <span className='text-primary-green font-semibold'>93%</span> of
                Buyers have Recommended this
              </p>
            </div>
          </div>
          <div className='my-7 flex flex-col gap-5'>
            <div className='flex gap-5 flex-wrap'>
              <PriceInfoCard
                title='Average Price'
                icon='/assets/icons/chart.svg'
                value={`${product.currency} ${formatNum(
                  product.averagePrice
                )} `}
                borderColor='#B6DBFF'
              />
              <PriceInfoCard
                title='Current Price'
                icon='/assets/icons/arrow-up.svg'
                value={`${product.currency} ${formatNum(
                  product.highestPrice
                )} `}
                borderColor='#B6DBFF'
              />
              <PriceInfoCard
                title='Average Price'
                icon='/assets/icons/arrow-down.svg'
                value={`${product.currency} ${formatNum(product.lowestPrice)} `}
                borderColor='#BEFFC5'
              />
            </div>
          </div>
          Modal
        </div>
      </div>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl text-secondary font-semibold'>
            Product Description
          </h3>
          <div className='flex flex-col gap-4'>
            {product?.description?.split('\n')}
          </div>
        </div>
        <button className='btn w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]'>
          <Image {...ASSET.btn_icon} />{' '}
          <Link href='/' className='text-base text-white'>
            ADD TO CART
          </Link>
        </button>
      </div>

      {relatedProducts && relatedProducts?.length > 0 && (
        <div className='py-14 flex flex-col gap2 w-full'>
          <p className='section-text'>Related Products</p>
          <div className='flex flex-wrap gap-10 mt-7 w-full'>
            {relatedProducts.map((product, index) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default page
