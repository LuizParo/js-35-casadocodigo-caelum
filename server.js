let http = require('http');
let express = require('express');

let app = express();
let port = '8080';
let host = '127.0.0.1';

app.get('/produtos', (req, res) => {
  res.send('<h1>Listagem de produtos<h1/>');
});

function Teste() {
  return new Promise((resolve, reject) => resolve("REACHED"));
}

app.listen(port, () => console.log(`Servidor executando em http://${host}:${port}`));
