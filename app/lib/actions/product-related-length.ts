async function relatedProducts(product: any) {
  const promise: Promise<any[] | null | undefined> = await product
  promise.then((result) => {
    if (Array.isArray(result)) {
      const length = result.length
      return length
    } else {
      return null
    }
  })
}

export default relatedProducts
