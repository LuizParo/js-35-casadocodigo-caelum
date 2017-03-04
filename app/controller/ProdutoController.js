let connectionFactory = require('../../config/connectionFactory');
let ProdutoDao = require('../dao/ProdutoDao');

class ProdutoController {

  form(req, res) {
    res.render('produtos/form', {livro : {}});
  }

  lista(req, res) {
    let connection = connectionFactory();
    let dao = new ProdutoDao(connection);

    dao.listaTodos((error, livros, fields) => {
      res.format({
        html : () => res.render('produtos/lista', {livros, salvo : req.query.salvo}),

        json : () => res.json(livros)
      });
    });

    connection.end();
  }

  buscaPorId(req, res) {
    let connection = connectionFactory();
    let dao = new ProdutoDao(connection);

    dao.buscaPorId(req.params.id, (error, livro, fields) => {
      res.format({
        html : () => res.render('produtos/form', {livro : livro[0] || {}}),

        json : () => res.json(livro)
      });
    });

    connection.end();
  }

  salva(req, res) {
    let connection = connectionFactory();
    let dao = new ProdutoDao(connection);

    req.assert('titulo', 'Título deve ser preenchido').notEmpty();
    req.assert('preco', 'Preço deve ser um número').isFloat();

    let errors = req.validationErrors();

    if(errors) {
      console.log('Há erros de validação!');

      res.format({
        html : () => res.status(400).render('produtos/form', {validationErrors : errors, livro : {}}),

        json : () => res.status(400).send(errors)
      });

      return;
    }

    dao.criar(req.body, (error, livro, fields) => {
      if(error) {
        console.log(error);
        return;
      }
      res.redirect('/produtos?salvo=true');
    });

    connection.end();
  }
}

module.exports = new ProdutoController();
