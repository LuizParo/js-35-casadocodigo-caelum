let express = require('express');
let app = express();

require('../app/routes/produtos')(app);

app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;