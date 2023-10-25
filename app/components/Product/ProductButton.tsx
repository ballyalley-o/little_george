// @components
import Image from 'next/image'
import Link from 'next/link'
import * as _ from '@assets/styles/product-page'
// @globals
import { ASSET } from '@config'
// @constants
import { TITLE, PATH } from '@constants'

const ProductButton = ({ product }: any) => {
  return (
    <>
      <div className={_.StyledDescContainerDiv}>
        <div className={_.StyledDescWrapperDiv}>
          <h3 className={_.StyledDescTextH3}>{TITLE.product_desc}</h3>
          <div className={_.StyledDescDiv}>
            {product?.description?.split('\n')}
          </div>
        </div>
        <button className={_.StyledCartBtn}>
          <Image {...ASSET.btn_icon} />
          <Link href={PATH.home} className={_.StyledLink}>
            {TITLE.cart}
          </Link>
        </button>
      </div>
    </>
  )
}

export default ProductButton
