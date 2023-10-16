import React from 'react'
// @components
import Image from 'next/image'
// @interfaces
import { PriceInfo } from '@interfaces/components'
// @assets
import { ASSET } from '@config'

const PriceInfoCard = ({ title, icon, value, borderColor }: PriceInfo) => {
  return (
    <div className={`price-info_card border-lp-[${borderColor}]`}>
      <p className='text-base text-black0199'>{title}</p>
      <div className='flex gap-1'>
        <Image src={icon} alt={title} {...ASSET.sizes.price_info} />
        <p className='text-2xl font-bold text-secondary'>{value}</p>
      </div>
    </div>
  )
}

export default PriceInfoCard
