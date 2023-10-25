// @components
import Image from 'next/image'
// @styles
import * as _ from '@assets/styles/product-page'
// @config
import { ASSET } from '@config'

const ProductIcon = ({ product }: any) => {
  return (
    <>
      <div className={_.StyledWrapperIconDiv}>
        <div className={_.StyledHeartIconDiv}>
          <Image {...ASSET.heart_icon} />
          <p className={_.StyledReviewsP}>{product.reviewsCount}</p>
        </div>
        <div className={_.StyledBookmarkIconP}>
          <Image {...ASSET.bookmark_icon} />
        </div>
        <div className={_.StyledShareContainerDiv}>
          <Image {...ASSET.share_icon} />
        </div>
      </div>
    </>
  )
}

export default ProductIcon
