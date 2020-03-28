const express = require("express"),
 path = require("path"),
 PORT = process.env.PORT || 3001,
 MONGD_URI = 'mongodb://user:password1@ds111565.mlab.com:11565/heroku_4m970fc5'
 app = express(),
 mongoose = require('mongoose')
 db = require('./models')

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
const stripe = require('stripe')('sk_test_ai2YEpuhM75MambznoGPHuks00F75ol1FW');

const customer = stripe.customers.create({
  name: 'david le',
  email: 'david.le@example.com',
  description: 'testing'
});

console.log(customer);

app.get("*", (req, res) => {
  res.sendFile('index.html', {
    root
  });
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
