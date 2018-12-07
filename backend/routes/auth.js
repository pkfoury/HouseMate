const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

// initialize mysql
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});
db.connect();

const verifyToken = (req, res) => {

}

const register = ({ body }, res) => {
  let hash = bcrypt.hashSync(body.body.password, 15)
  db.query("INSERT INTO `members` (name, email, password) VALUES ('" + body.body.name + "', '" +
    body.body.email + "', '" + hash + "')", (error, results) => {
      if (error) res.send(error);
      res.json({ success: true });
    });
}

const login = ({body}, res) => {
  console.log(body.body.email)
  // check db
  db.query("SELECT * FROM members WHERE email = '" + body.body.email + "'", function (error, results) {
    if (error) res.send(error);
    if (results.length > 0 && bcrypt.compareSync(body.body.password, results[0]['password'])) {
      res.status(200);
      // if in db
      // gen token

      res.json({ success: true, token: results[0]['password'] });
    } else {
      res.json({success: false});
    }
  });


}

module.exports = { verifyToken, register, login };
