const welcomeHTML = (product: any) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Little George</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        margin-top: 2rem;
        font-family: sans-serif;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
      }

      header {
        background-color: #333;
        color: #fff;
        padding: 1rem;
        text-align: center;
      }

      main {
        padding: 1rem;
      }

      footer {
        background-color: #007bff;
        color: #fff;
        text-align: center;
        padding: 2rem 0;
        margin-top: 2em;
      }

      h3 {
        font-size: 1.125rem /* 18px */;
        line-height: 1.75rem /* 28px */;
      }

      p {
        font-size: 1rem /* 16px */;
        line-height: 1.5rem /* 24px */;
        padding: 1em;
      }

      button {
        display: inline-block;
        font-weight: 400;
        color: #212529;
        text-align: center;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        color: #fff;
        background-color: #007bff;
        cursor: pointer;
        color: #ffffff;
      }

      .head_div {
        margin-top: 2em;
        margin-left: auto;
        margin-right: auto;
      }
      .cover_img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 600px;
      }

      .content_img {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2em;
        margin-bottom: 2em;
        width: 600px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div>
        <img
          src="https://i.ibb.co/hLxdHvD/littlegeorge.png"
          alt="little-george-cover"
          class="cover_img"
        />
        <div align="center" class="head_div">
          <h2>Welcome to Little George 🚀</h2>
          <p>You are now tracking ${product.title}.</p>
          <p>Here's an example of how you'll receive updates:</p>
        </div>
        <div class="" align="center">
          <h3>${product.title} is back in stock!</h3>
          <p>
            We're excited to let you know that ${product.title} is now back in
            stock.
          </p>
          <div align="center">
            <p>
              <a
                href="${product.url}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">Jump to Amazon</button>
              </a>
            </p>
          </div>
          <div align="center">
            <img
              src="https://i.ibb.co/pwFBRMC/Screenshot-2023-09-26-at-1-47-50-AM.png"
              alt="Product Image"
              class="content_img"
            />
          </div>
        </div>
        <div align="center">
          <p class="text-base">
            Stay tuned for more updates on ${product.title} and other products
            you're tracking.
          </p>
        </div>
      </div>
      <footer>&copy; Copyright of Little-George Ltd</footer>
    </div>
  </body>
</html>
`

export default welcomeHTML
