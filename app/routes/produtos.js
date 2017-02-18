let connectionFactory = require('../../config/connectionFactory');
let ProdutoDao = require('../dao/ProdutoDao');

module.exports = app => {
  app.get('/produtos', (req, res) => {
    let connection = connectionFactory();
    let dao = new ProdutoDao(connection);

    dao.listaTodos((error, livros, fields) => {
      res.format({
        html : () => res.render('produtos/lista', {livros, salvo : req.query.salvo}),

        json : () => res.json(livros)
      });
    });

    connection.end();
  });

  app.get('/produtos/form', (req, res) => res.render('produtos/form'));

  app.post('/produtos', (req, res) => {
    let connection = connectionFactory();
    let dao = new ProdutoDao(connection);

    dao.criar(req.body, (error, livro, fields) => {
      if(error) {
        console.log(error);
        return;
      }
      res.redirect('/produtos?salvo=true');
    });

    connection.end();
  });
};
