let mysql = require('mysql');

function createConnection() {
  let connection = mysql.createConnection({
    host : '0.0.0.0',
    port : 3307,
    database : process.env.NODE_ENV === 'test' ? casadocodigo_teste : 'casadocodigo',
    user : 'root',
    password : ''
  });

  return connection;
}

module.exports = createConnection;
