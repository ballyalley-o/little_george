function extractDescription($: any) {
  const selectors = [
    '.a-unordered-list .a-list-item',
    '.a-expander-content p',
    // Add more selectors here if needed
  ]

  for (const selector of selectors) {
    const elements = $(selector)
    if (elements.length > 0) {
      const textContent = elements
        .map((_: any, element: any) => $(element).text().trim())
        .get()
        .join('\n')

      return textContent
    }
  }
  return ''
}

export default extractDescription
