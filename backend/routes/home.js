const mysql = require('mysql');

// initialize mysql
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});
db.connect();

// get home
const getHome = (req, res, next) => {
  if (req.query.id) {
    db.query('SELECT * FROM homes WHERE homes.id = ' + req.query.id, function (error, results) {
      if (error) throw error;
      res.send(results[0]);
    });
  } else {
    next("home not found")
  }
}

module.exports = {getHome};