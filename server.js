const express = require('express');
const mysql = require('mysql')
const path = require('path');
require('dotenv').config()

const app = express();

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});

db.connect();

app.use(express.static(path.join(__dirname, 'build')));

// get homes
app.get('/homes', (req, res) => {
  console.log('homes endpoint');
  db.query('SELECT * FROM homes', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
})

// get member
app.get('/members', (req, res) => {
  console.log('members endpoint');
  db.query('SELECT * FROM members', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
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
