'use server'

import fs from 'fs'
import path from 'path'
// import nodemailer from 'nodemailer'
import { EmailProductInfo, NotificationTypes } from '@types'
// @constatnts
import { NOTIFICATION, MAIL_TEMPLATE } from '@constants'
import { templateHandler } from '@utils'

const generateEmailBody = async (
  product: EmailProductInfo,
  type: NotificationTypes
) => {
  const shortTitle =
    product.title.length > 20
      ? ` ${product.title.substring(0, 20)}...`
      : product.title

  let subject = ''
  let body = ''
  //   const __dirname = path.resolve('app', 'assets')
  //   console.log(__dirname)

  //   const htmlLoc = path.join(__dirname, 'html', 'welcome.html')
  //   const htmlBody = templateHandler(htmlLoc, { product }).then((html) => {
  //     console.log(html, 'HTML')
  //     return html
  //   })

  // const cssLoc = path.resolve('app', 'assets', 'html')
  // const cssFile = path.join(cssLoc, 'welcome.html')
  // const cssContent = fs.readFileSync(cssFile, 'utf-8')

  switch (type) {
    case NOTIFICATION.WELCOME:
      subject = MAIL_TEMPLATE.welcome.subject
      body = MAIL_TEMPLATE.welcome.body(product)
      break

    case NOTIFICATION.CHANGE_OF_STOCK:
      subject = MAIL_TEMPLATE.on_stock.subject(shortTitle)
      body = MAIL_TEMPLATE.on_stock.body(product)
      break

    case NOTIFICATION.LOWEST_PRICE:
      subject = MAIL_TEMPLATE.price_low.subject(shortTitle)
      body = MAIL_TEMPLATE.price_low.body(product)
      break

    case NOTIFICATION.THRESHOLD_MET:
      subject = MAIL_TEMPLATE.threshold_met.subject(shortTitle)
      body = MAIL_TEMPLATE.threshold_met.body(product)
      break

    default:
      throw new Error('Invalid Notification Type')
  }

  return { subject, body }
}

export default generateEmailBody
