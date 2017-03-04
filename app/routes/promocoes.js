let PromocoesController = require('../controller/PromocoesController');

module.exports = app => {

  app.get('/promocoes/form', PromocoesController.form);
  app.post('/promocoes', PromocoesController.dispara);
};
