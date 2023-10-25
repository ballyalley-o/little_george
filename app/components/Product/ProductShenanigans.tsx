// @components
import Image from 'next/image'
// @styles
import * as _ from '@assets/styles/product-page'
// @constants & @config
import { ASSET } from '@config'
import { TITLE } from '@constants'
import { formatNum } from '@utils'

const ProductShenanigans = ({ product }: any) => {
  return (
    <div className={_.StyledContainer2Div}>
      <div className={_.StyledProductInfoDiv}>
        <div className={_.StyledWrapperPriceDiv}>
          <p className={_.StyledCurrPriceP}>
            {product.currency}
            {formatNum(product.currentPrice)}
          </p>
          <p className={_.StyledOrigPriceP}>
            {product.currency}
            {formatNum(product.originalPrice)}
          </p>
        </div>
        <div className={_.StyledIconContainerDiv}>
          <div className={_.StyledIconHolderDiv}>
            <div className={_.StyledStarDiv}>
              <Image {...ASSET.star_icon} />
              <p className={_.StyledStarTextP}>{product.stars || '25'}</p>
            </div>
            <div className={_.StyledReviewsDiv}>
              <Image {...ASSET.comment_icon} />
              <p className={_.StyledReviewsTextP}>
                {product.reviewsCount} Reviews
              </p>
            </div>
          </div>
          <p className={_.StyledRecommendTextP}>
            <span className={_.StyledPercentTextSpan}>
              {TITLE.recommend[1]}
            </span>
            {TITLE.recommend[0]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductShenanigans
