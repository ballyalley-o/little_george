// @components
import Link from 'next/link'
import Image from 'next/image'
// @styles
import * as _ from '@assets/styles/navbar'
// @globals, @constants & @config
import { ASSET, GLOBAL } from '@config'
import { PATH } from '@constants'

const NavBrand = () => {
  return (
    <>
      <Link href={PATH.home} className={_.StyledLink}>
        <p className={_.StyledTextLogo}>{GLOBAL.brand_text[0]}</p>
        <Image {...ASSET.logo()} />
        <p className={_.StyledText2Logo}>{GLOBAL.brand_text[1]}</p>
      </Link>
    </>
  )
}

export default NavBrand
