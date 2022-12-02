const express = require('express');
// const pessoasController = require('../controllers/pessoasController');

const router = express.Router();

const pessoasController = require('../controllers/pessoasController');

// router.get('/pessoas', pessoasController.getAllPessoas);
// router.get('/', pessoasController.getPessoasView);

router.get('/viewPessoas', pessoasController.getPessoasView);
router.get('/pessoas', pessoasController.getAllPessoas);
router.post('/pessoas', pessoasController.createPessoas);

module.exports = router;