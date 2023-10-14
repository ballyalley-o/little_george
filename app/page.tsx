import React from 'react'
// @globals & @assets
import { ASSET } from '@config'
// @components
import Image from 'next/image'
import { SearchBar, HeroCarousel } from '@components'
// @constants
import { BRAND, TITLE } from '@constants'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24 '>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              See All the Prices Here:
              <Image {...ASSET.arrow_r} />
            </p>
            <h1 className='head-text'>{BRAND.hero}</h1>
            <p className='mt-6'>{BRAND.desc}</p>
            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className='trending-section'>
        <h2 className='section-text'>{TITLE.trending}</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['apple', 'book', 'shoes', 'pussy'].map((product, index) => (
            <div key={index}>{product}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
