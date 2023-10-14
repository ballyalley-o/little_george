import { toast } from 'react-toastify'
// @utils
import { logger } from '@utils'

const isAmazonProductValid = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.includes('amazon')
    ) {
      logger.log('VALID LINK')
      return true
    }
  } catch (err: any) {
    toast.error(err?.message)
    return false
  }
  return false
}

export default isAmazonProductValid
