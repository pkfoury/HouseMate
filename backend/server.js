const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()

// configure express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

// allow cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// use routes folder
app.use('/api', require('./routes'));

// serve react site
if (process.env.NODE_ENV == 'prod') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(8080, () => {
  console.log("listening on 8080");
});
