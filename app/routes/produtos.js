let ProdutoController = require('../controller/ProdutoController');

module.exports = app => {
  app.get('/produtos/form', ProdutoController.form);

  app.get('/produtos', ProdutoController.lista);

  app.get('/produtos/:id/form', ProdutoController.buscaPorId);

  app.post('/produtos', ProdutoController.salva);
};
