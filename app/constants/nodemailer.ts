// import { Product } from '@types'

const THRESHOLD_PERCENTAGE = 40

const MAIL_TEMPLATE = {
  // @welcome
  welcome: {
    subject: `Welcome to little george`,
    body: (product: any) => `
        <div>
          <h2>Welcome to Little George 🚀</h2>
          <p>You are now tracking ${product.title}.</p>
          <p>Here's an example of how you'll receive updates: </p>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
            <h3>${product.title} is back in stock!</h3>
            <p>We're excited to let you know that ${product.title} is now back in stock.</p>
            <p>Don't miss out - <a href="${product.url}" target="_blank" rel="noopener noreferrer">buy it now</a>!</p>
            <img src="https://i.ibb.co/pwFBRMC/Screenshot-2023-09-26-at-1-47-50-AM.png" alt="Product Image" style="max-width: 100%;" />
          </div>
          <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
        </div>
    `,
  },
  // @on_stock
  on_stock: {
    subject: (shortTitle: any) =>
      ` ${shortTitle} is now back in Stock, Grab it now!`,
    body: (product: any) => ` <div>
          <h4>Hey, ${product.title} is now restocked! Grab yours before they run out again!</h4>
          <p>See the product <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
        `,
  },
  // @price_low
  price_low: {
    subject: (shortTitle: any) => `Lowest Price Alert for ${shortTitle}`,
    body: (product: any) => ` <div>
          <h4>Hey, ${product.title} has reached its lowest price ever!!</h4>
          <p>Grab the product <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a> now.</p>
        </div>
    `,
  },
  // @threshold_met
  threshold_met: {
    subject: (shortTitle: any) => `Discount Alert for ${shortTitle}`,
    body: (product: any) => `
        <div>
          <h4>Hey, ${product.title} is now available at a discount more than ${THRESHOLD_PERCENTAGE}%!</h4>
          <p>Grab it right away from <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
  `,
  },
}

export default MAIL_TEMPLATE
