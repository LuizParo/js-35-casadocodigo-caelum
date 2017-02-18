let mysql = require('mysql');

let connection = mysql.createConnection({
  host : '0.0.0.0',
  port : 3307,
  database : 'casadocodigo',
  user : 'root',
  password : ''
});

module.exports = () => connection;
