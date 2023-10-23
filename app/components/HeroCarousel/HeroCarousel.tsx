'use client'
// @css
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// @components
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
// @assets & @configurations
import { ASSET, SETTING } from '@config'
// @styles
import * as _ from '@assets/styles'

const HeroCarousel = () => {
  return (
    <div className={_.hero.StyledHeroDiv}>
      <Carousel {...SETTING.carousel_home}>
        {ASSET.mock_products.map((image, index) => (
          <Image
            key={index}
            src={image.imgUrl}
            alt={image.alt}
            className={_.hero.StyledContainImg}
            {...ASSET.sizes.images}
          />
        ))}
      </Carousel>
      <Image {...ASSET.arrow_sketch} />
    </div>
  )
}

export default HeroCarousel
