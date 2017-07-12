var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 4200,   
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bae7fed3021368",
  password: "c61ae4a0",
  database: "heroku_e39804d225c9779",
  connectionLimit: 5
});

// connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
