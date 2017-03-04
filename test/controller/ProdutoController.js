let connectionFactory = require('../../config/connectionFactory');
let express = require('../../config/express');
let request = require('supertest')(express);
let DatabaseCleaner = require('database-cleaner');

describe('#ProdutoController', () => {

  beforeEach(done => {
    let databaseCleaner = new DatabaseCleaner('mysql');
    databaseCleaner.clean(connectionFactory(), done);
  });

  after(done => {
    let databaseCleaner = new DatabaseCleaner('mysql');
    databaseCleaner.clean(connectionFactory(), done);
  });

  it('listagem de produtos com json', done => {
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  it('listagem de produtos com html', done => {
    request.get('/produtos')
      .expect('Content-type', /html/)
      .expect(200, done);
  });
});
