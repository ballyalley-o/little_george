function extractDiscountRate(element: any) {
  const discountPercentage = element.text().replace(/[-%]/g, '')

  return discountPercentage
}

export default extractDiscountRate
