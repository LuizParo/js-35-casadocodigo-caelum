let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

require('../app/routes/produtos')(app);

module.exports = app;
