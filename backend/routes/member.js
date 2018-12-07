const mysql = require('mysql');

// initialize mysql
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});
db.connect();

const getMembers = (req, res, next) => {
  if (req.query.home_id) {
    db.query('SELECT * FROM members WHERE home_id = ' + req.query.home_id, function (error, results) {
      if (error) throw error;
      res.send(results);
    });
  } else {
    next("home not found");
  }
}

module.exports = {getMembers};