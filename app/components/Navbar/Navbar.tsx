import React from 'react'
// @components
import Image from 'next/image'
import { NavBrand } from '@components'
// @globals, @constants  & @assets
import { ASSET, GLOBAL } from '@config'
// @styles
import * as _ from '@assets/styles'

const Navbar = () => {
  return (
    <header className={_.nav.StyledHeader}>
      <nav className={_.nav.StyledNav}>
        <NavBrand />
        <div className={_.nav.StyledIconsContainer}>
          {ASSET.nav.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              {...GLOBAL.nav_icon_size}
              className={_.nav.StyledImage}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
