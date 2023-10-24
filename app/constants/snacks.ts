const SNACKS = {
  db: {
    connecting: (db: any) => `Attempting to Connect to ${db}.. .`,
  },
  link: {
    invalid: 'Provide a Valid Link',
    success: 'Successful Scrape',
  },
  email: {
    sent: 'Email Sent',
  },
  error: {
    scrape_err: (error: any) => `Failed to scraped product: ${error}`,
    get_err: (error: any) => `Error in GET req: ${error.message}`,
    no_product: 'No product found',
    db_uri: 'Invalid DB URI',
  },
}

export default SNACKS
