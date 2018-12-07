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

const addTask = ({ body }) => {
  db.query("INSERT INTO `tasks` (name, home_id) VALUES ('" + body.body.name + "', '" + body.body.id + "'", function (error, results) {
    if (error) throw error;
    res.send("success");
  });

}

const deleteTask = (req, res) => {
  if (req.query.name) {
    db.query("DELETE FROM `tasks` WHERE name = '" + req.query.name + "'", function (error, results) {
      if (error) throw error;
      res.send("success");
    });
  } else {
    res.send('null task');
  }

}


module.exports = { getTasks, addTask, deleteTask }