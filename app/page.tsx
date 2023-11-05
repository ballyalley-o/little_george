import React from 'react'
// @globals & @assets
import { ASSET } from '@config'
// @actions
import { getProducts } from '@lib/actions/getters'
// @components
import Image from 'next/image'
import { SearchBar, HeroCarousel, ProductCard } from '@components'
// @styles
import { def } from '@assets/styles'
// @constants
import { BRAND, TITLE } from '@constants'

const Home = async () => {
  const products = await getProducts()
  return (
    <>
      <section className={def.StyledContainerSection}>
        <div className={def.StyledWrapperDiv}>
          <div className={def.StyledHeroWrapperDiv}>
            <p className={def.StyledHeroTitleP}>
              See All the Prices Here:
              <Image {...ASSET.arrow_r} />
            </p>
            <h1 className={def.StyledHeroBrandH1}>{BRAND.hero}</h1>
            <p className={def.StyledHeroDescP}>{BRAND.desc}</p>
            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className={def.StyledTrendingWrapper}>
        <h2 className={def.StyledSectionTextH2}>{TITLE.trending}</h2>
        <div className={def.StyledMapContainer}>
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
