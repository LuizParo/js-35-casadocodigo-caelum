let express = require('express');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(expressValidator());

require('../app/routes/produtos')(app);
require('../app/routes/promocoes')(app);

module.exports = app;
