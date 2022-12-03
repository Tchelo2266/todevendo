const express = require('express');
// const pessoasController = require('../controllers/pessoasController');

const router = express.Router();

const pessoasController = require('../controllers/pessoasController');
const dividasController = require('../controllers/dividasController');
const mutuariosController = require('../controllers/mutuariosController');

// router.get('/pessoas', pessoasController.getAllPessoas);
// router.get('/', pessoasController.getPessoasView);



router.get('/', function(req, res) {
    res.render('home.ejs');
})
router.get('/listaCredor', pessoasController.getCredoresView);
router.get('/cadastroCredor', pessoasController.cadastroCredorView);
router.post('/cadastroCredor', pessoasController.createCredor);

router.get('/listaDividas', dividasController.getDividasView);
router.get('/cadastroDivida', dividasController.cadastroDividasView);
router.post('/cadastroDivida', dividasController.createDivida);
router.get('/baixaDivida/:id', dividasController.baixaDivida);

router.get('/listaMutuarios', mutuariosController.getMutuariosView);
router.get('/cadastroMutuario', mutuariosController.cadastroMutuariosView);
router.post('/cadastroMutuario', mutuariosController.createMutuario);

module.exports = router;