const express = require('express');
const router = require('./routes/router');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// app.get('/home', function(req, res) {
//     console.log("aquiii");
//     res.render('pessoas.ejs');
// })

app.use(express.json());
app.use(router);

module.exports = app;