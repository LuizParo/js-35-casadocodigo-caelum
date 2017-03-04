let connectionFactory = require('../../config/connectionFactory');
let ProdutoDao = require('../dao/ProdutoDao');
let produtoDao = new ProdutoDao(connectionFactory());

class PromocoesController {

  form(req, res) {
    produtoDao.listaTodos((err, livros, fields) => {
      if(err) {
        res.send(err);
        return;
      }

      res.render('promocoes/form', {livros});
    });
  }

  dispara(req, res) {
    res.redirect('promocoes/form');
  }
}

module.exports = new PromocoesController();
