import { toast } from 'react-toastify'

const isAmazonProductValid = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.includes('amazon')
    ) {
      toast.success(`${url} VALID`)
      return true
    }
  } catch (err: any) {
    toast.error(err?.message)
    return false
  }
  return false
}

export default isAmazonProductValid
