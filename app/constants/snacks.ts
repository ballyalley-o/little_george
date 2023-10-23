const SNACKS = {
  db: {
    connecting: (db: any) => `Attempting to Connect to ${db}.. .`,
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
