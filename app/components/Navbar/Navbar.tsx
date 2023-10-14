import React from 'react'
// @components
import Image from 'next/image'
import Link from 'next/link'
// @globals & @assets
import { ASSET, GLOBAL } from '@config'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
          <p className='nav-brand'>little</p>
          <Image {...ASSET.logo} />
          <p className='nav-brand-2'>george</p>
        </Link>
        <div className='flex items-center gap-5'>
          {ASSET.nav.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              {...GLOBAL.nav_icon_size}
              className='object-contain'
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
