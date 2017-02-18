class ProdutoDao {

  constructor(connection) {
    this._connection = connection;
  }

  listaTodos(callback) {
    return this._connection.query('select * from livros', callback);
  }
}

module.exports = ProdutoDao;
