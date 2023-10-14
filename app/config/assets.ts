const ASSET = {
  sizes: {
    navIcon: {
      width: 28,
      height: 28,
    },
    images: {
      width: 484,
      height: 484,
    },
  },
  logo: {
    src: '/assets/brand/little-george.svg',
    width: 27,
    height: 27,
    alt: 'brand-logo',
  },
  arrow_r: {
    src: '/assets/icons/arrow-right.svg',
    alt: 'arrow-right',
    width: 16,
    height: 16,
  },
  nav: [
    { src: '/assets/icons/search.svg', alt: 'search' },
    { src: '/assets/icons/black-heart.svg', alt: 'black-heart' },
    { src: '/assets/icons/user.svg', alt: 'user' },
  ],
  arrow_sketch: {
    src: '/assets/icons/hand-drawn-arrow.svg',
    alt: 'sketch arrow',
    width: 175,
    height: 175,
    className:
      'max-xl:hidden absolute -left-[15%] bottom-4 z-0 transform rotate-12',
  },
  mock_products: [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smart-watch' },
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air-fryer' },
    { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
  ],
}

export default ASSET
