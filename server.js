const express = require("express"),
 path = require("path"),
 PORT = process.env.PORT || 3001,
 MONGD_URI = 'mongodb://user:password1@ds111565.mlab.com:11565/heroku_4m970fc5'
 app = express(),
 mongoose = require('mongoose'),
 db = require('./models'),
 cors = require('cors'),
 uuid = require('uuid/v4'),
 require('dotenv').config() 
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));


// Mongoose
mongoose.connect(MONGD_URI, { useNewUrlParser: true });

app.get("/item", function(req, res) {
  db.Item.find({}).then(function(docs) {
  console.log(docs)
      res.status(200).json(docs);
    
  }).catch(err => {
    console.log(err) 
  })

});




//Stripe
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const StripSecretKey = process.env.STRIPE_PUBLIC_KEY
const stripe = require('stripe')(StripSecretKey);


app.get("*", (req, res) => {
  res.sendFile('index.html', {
    root
  });
})

app.post('/payment', (req, res) => {

  const {product, token} = req.body
  console.log('Product: ', product);
  console.log('PRICE: ', product.price)
  const idempontencyKey = uuid();

  return stripe.customers
  .create({
    email: token.email,
    source: token.id
  })
  .then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.id,
      description: `purchase of product.name`,
      shipping: {
        name: token.card.name,
        address: {
          country: token.card.address_country
        }
      }
    }, {idempontencyKey})
  })
  .then(result => res.status(200).json(result))
  .catch(err => console.log(err))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
