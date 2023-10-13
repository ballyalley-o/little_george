import React from 'react'
// @components
import Image from 'next/image'
import Link from 'next/link'
// @assets
import { ASSETS } from '@config'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
          <p className='nav-brand'>little</p>
          <Image {...ASSETS.logo} />
          <p className='nav-brand'>george</p>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
