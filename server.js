const express = require('express');
const mysql = require('mysql')
const path = require('path');
require('dotenv').config()

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});

db.connect();

// get homes
app.get('/homes', (req, res, next) => {
  if (req.query.id) {
    db.query('SELECT * FROM homes WHERE homes.id = ' + req.query.id, function (error, results) {
      if (error) throw error;
      res.send(results[0]);
    });
  } else {
    next("home not found")
  }
})

// get members
app.get('/members', (req, res, next) => {
  if (req.query.home_id) {
    db.query('SELECT * FROM members WHERE home_id = ' + req.query.home_id, function (error, results) {
      if (error) throw error;
      res.send(results);
    });
  } else {
    next("home not found");
  }
})

// get tasks
app.get('/tasks', (req, res) => {
  console.log('tasks endpoint');
  db.query('SELECT * FROM tasks', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
})


// serve react site
if (process.env.NODE_ENV == 'prod') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(8080, () => {
  console.log("listening on 8080");
});
