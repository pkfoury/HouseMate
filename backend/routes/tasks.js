const mysql = require('mysql');

// initialize mysql
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'housemate'
});
db.connect();

const tasks = (req, res) => {
  db.query('SELECT * FROM tasks', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
}

module.exports = {tasks};