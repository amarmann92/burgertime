const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.connection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
  });
}

connection.connect();

module.exports = connection;
