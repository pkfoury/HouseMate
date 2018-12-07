const mysql = require('mysql');

// initialize mysql
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});
db.connect();

const getTasks = (req, res) => {
  db.query('SELECT * FROM `tasks` WHERE home_id = ' + req.query.home_id, function (error, results) {
    if (error) throw error;
    console.log(results);
    res.send(results);
  });
}


module.exports = { getTasks }