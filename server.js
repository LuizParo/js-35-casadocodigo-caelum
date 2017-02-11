let http = require('http');
let app = require('./config/express');

let port = '8080';
let host = '127.0.0.1';

app.listen(port, () => console.log(`Servidor executando em http://${host}:${port}`));
