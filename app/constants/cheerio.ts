const CHEERIO = {
  title: {
    id: '#productTitle',
  },
  currency: {
    nz: '.a-price-symbol',
  },
  discountRate: {
    def: '.savingsPercentage',
  },
  os: ($: any) => {
    return (
      $('#availability span').text().trim().toLowerCase() ===
      'currently unavailable'
    )
  },
  current_price: ($: any) => {
    return (
      $('.priceToPay span.a-price-whole'),
      $('a.size.base.a-color-price'),
      $('.a-button-selected .a-color-base'),
      $('.a-price.a-text-price')
    )
  },
  original_price: ($: any) => {
    return (
      $('#priceblock_ourprice'),
      $('.a-price.a-text-price span.a-offscreen'),
      $('#listPrice'),
      $('#priceblock_dealprice'),
      $('.a-size-base.a-color-price')
    )
  },
  images: ($: any) => {
    return (
      $('#imgBlkFront').attr('data-a-dynamic-image') ||
      $('#landingImage').attr('data-a-dynamic-image') ||
      '{}'
    )
  },
}

export default CHEERIO
