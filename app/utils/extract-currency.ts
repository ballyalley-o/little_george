function extractCurrency(element: any) {
  const currencyText = element.text().trim().slice(0, 1)
  return currencyText && currencyText
}

export default extractCurrency
