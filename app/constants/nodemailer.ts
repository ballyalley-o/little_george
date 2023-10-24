import {
  welcomeHTML,
  changeStockHTML,
  priceLowHTML,
  thresholdMetHTML,
} from '@assets/html'

const THRESHOLD_PERCENTAGE = 40

const MAIL_TEMPLATE = {
  // @welcome
  welcome: {
    subject: `Welcome to little george`,
    body: (product: any) => welcomeHTML(product),
  },
  // @on_stock
  on_stock: {
    subject: (shortTitle: any) =>
      ` ${shortTitle} is now back in Stock, Grab it now!`,
    body: (product: any) => changeStockHTML(product),
  },
  // @price_low
  price_low: {
    subject: (shortTitle: any) => `Lowest Price Alert for ${shortTitle}`,
    body: (product: any) => priceLowHTML(product),
  },
  // @threshold_met
  threshold_met: {
    subject: (shortTitle: any) => `Discount Alert for ${shortTitle}`,
    body: (product: any, threshold: any) =>
      thresholdMetHTML(product, THRESHOLD_PERCENTAGE),
  },
}

export default MAIL_TEMPLATE
