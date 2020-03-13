const express = require("express"),
 path = require("path"),
 PORT = process.env.PORT || 3001,
 app = express(),
 mongoose = require('mongoose')
 db = mongoose.connection;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));


// Mongoose
mongoose.connect("mongodb://user:password1@ds111565.mlab.com:11565/heroku_4m970fc5", { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db')
});


app.get("*", (req, res) => {
  res.sendFile('index.html', {
    root
  });
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
