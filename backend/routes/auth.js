const jwt = require('jsonwebtoken');
const mysql = require('mysql');

// initialize mysql
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});
db.connect();

const verifyToken = (req, res) => {

}

const login = (req, res) => {
  // check db
  // if in db
  // gen token
  res.json({ success: true, token });
}

module.exports = {verifyToken, login};
