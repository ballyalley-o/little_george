// components
import Link from 'next/link'
import * as _ from '@assets/styles/product-page'
// @constants
import { TITLE } from '@constants'
// @assets
import { AiFillAmazonCircle } from 'react-icons/ai'

const ProductAmazonBtn = ({ product }: any) => {
  return (
    <>
      <div className={_.StyledContentContainerDiv}>
        <p className={_.StyledTitleP}>{product.title}</p>
        <Link href={product.url} target='_blank' className={_.StyledAmazonLink}>
          {TITLE.amazon} <AiFillAmazonCircle />
        </Link>
      </div>
    </>
  )
}

export default ProductAmazonBtn
