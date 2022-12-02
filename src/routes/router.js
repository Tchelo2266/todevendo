const express = require('express');
// const pessoasController = require('../controllers/pessoasController');

const router = express.Router();

const pessoasController = require('../controllers/pessoasController');

// router.get('/pessoas', pessoasController.getAllPessoas);
router.get('/pessoas', pessoasController.getAllPessoas);
router.post('/pessoas', pessoasController.createPessoas);
router.post('/deletePessoas/:id', pessoasController.deletePessoas);
router.put('/pessoas/:id', pessoasController.updatePessoas);

module.exports = router;