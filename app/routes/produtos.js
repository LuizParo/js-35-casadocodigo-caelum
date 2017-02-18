let connectionFactory = require('../../config/connectionFactory');
let ProdutoDao = require('../dao/ProdutoDao');

module.exports = app => {
  app.get('/produtos', (req, res) => {
    let connection = connectionFactory();
    let dao = new ProdutoDao(connection);

    dao.listaTodos((error, livros, fields) => {
      res.render('produtos/lista', {livros});
    });

    connection.end();
  });
};
