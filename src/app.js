const express = require('express');
const expressLayoutes = require('express-ejs-layouts')
const router = require('./routes/router');
const bodyParser = require('body-parser')

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(expressLayoutes);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/dividas', function(req, res) {
    console.log("aquiii");
    res.render('dividas.ejs');
})

app.use(express.json());
app.use(router);

module.exports = app;