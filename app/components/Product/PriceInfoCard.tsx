import React from 'react'
// @components
import Image from 'next/image'
// @styles
import * as _ from '@assets/styles/product'
// @interfaces
import { PriceInfo } from '@interfaces/components'
// @assets
import { ASSET } from '@config'

const PriceInfoCard = ({ title, icon, value, borderColor }: PriceInfo) => {
  return (
    <div className={_.StyledContainerDiv(borderColor)}>
      <p className={_.StyledTitleP}>{title}</p>
      <div className={_.StyledLogoWrapperDiv}>
        <Image src={icon} alt={title} {...ASSET.sizes.price_info} />
        <p className={_.StyledValueP}>{value}</p>
      </div>
    </div>
  )
}

export default PriceInfoCard
