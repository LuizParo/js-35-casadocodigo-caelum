class ProdutoDao {

  constructor(connection) {
    this._connection = connection;
  }

  listaTodos(callback) {
    return this._connection.query('select * from livros', callback);
  }

  buscaPorId(id, callback) {
    return this._connection.query('select * from livros where id = ?', [id], callback);
  }

  criar(livro, callback) {
    return this._connection.query('INSERT INTO livros SET ?', livro, callback);
  }
}

module.exports = ProdutoDao;
