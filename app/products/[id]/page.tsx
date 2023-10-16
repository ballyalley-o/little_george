import React from 'react'
// @components
import { ProductDetails } from '@components/Product'
// @types
import Image from 'next/image'
import Link from 'next/link'
import { Params, Product } from '@types'
import { getProductById } from '@lib/actions/getters'
import { redirect } from 'next/navigation'
// @assets
import { AiFillAmazonCircle } from 'react-icons/ai'
// @globals
import { ASSET } from '@config'

const page = async ({ params: { id } }: Params) => {
  const product: Product = await getProductById(id)

  if (!product) redirect('/')
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
        </div>
      </div>
    </div>
  )
}

export default page
