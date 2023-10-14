'use client'
// @css
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// @components
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
// @assets & @configurations
import { ASSET, SETTING } from '@config'

const HeroCarousel = () => {
  return (
    <Carousel {...SETTING.carousel_home}>
      {ASSET.mock_products.map((image, index) => (
        <Image
          key={index}
          src={image.imgUrl}
          alt={image.alt}
          className='object-contain'
          {...ASSET.sizes.images}
        />
      ))}
    </Carousel>
  )
}

export default HeroCarousel
