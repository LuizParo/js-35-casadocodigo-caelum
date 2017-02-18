let mysql = require('mysql');

module.exports = app => {
  app.get('/produtos', (req, res) => {
    let connection = mysql.createConnection({
      host : '0.0.0.0',
      port : 3307,
      database : 'casadocodigo',
      user : 'root',
      password : ''
    });

    connection.query('select * from livros', (error, livros, fields) => {
      res.render('produtos/lista', {livros});
    });
  });
};
