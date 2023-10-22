'use server'

import { EmailContent } from '@types'
import nodemailer from 'nodemailer'
// @globals
import { GLOBAL } from '@config'
// @logger
import { logger } from '@utils'
import { LogLevel } from '@interfaces/logger'
// @assets
import { toast } from 'react-toastify'

const transporter = nodemailer.createTransport({
  pool: true,
  service: 'hotmail',
  port: 2525,
  auth: {
    user: GLOBAL.stp_email,
    pass: GLOBAL.stp_pw,
  },
  maxConnections: 1,
})

const sendEmail = async (emailContent: EmailContent, sendTo: string[]) => {
  const mailOptions = {
    from: GLOBAL.stp_email,
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  }
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) throw new Error(error)
    logger.custom(
      LogLevel.Info,
      `Email sent: ` + JSON.stringify(info, null, 2),
      'cyan'
    )
    // console.log(`Email sent: `, info)
  })
}

export default sendEmail
