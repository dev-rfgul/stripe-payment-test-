// This is your test secret API key.
// Replace it with your live secret API key in production.
// const secretKey = process.env.REACT_APP_SECRET_KEY;

require('dotenv').config();
const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(`${secretKey}`);
const express = require('express');
const app = express();
app.use(express.static('public'));
console.log(secretKey)

let YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1QS19FRqZfeqMphlQRhfY2Oc',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?/success`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
  });

  res.redirect(303, session.url);
});
app.listen(4242, () => console.log('Running on port 4242'));

