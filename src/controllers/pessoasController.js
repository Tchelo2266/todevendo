const pessoasModel = require('../models/pessoasModel');

const getCredoresView = (req, res) => {
    // res.render('cadastroCredor.ejs');
    res.render('listaCredor.ejs', {credores: []});
}

const cadastroCredorView = (req, res) => {
    // res.render('cadastroCredor.ejs');
    res.render('cadastroCredor.ejs');
}

const getAllPessoas = async(request, response) => {
    const pessoas = await pessoasModel.getAll();
    return response.status(200).json(pessoas);
};

const createCredor = async(request, response) => {
    //Funcionando
    const createdPessoas = await pessoasModel.createPessoas(request.body);
    return response.status(201).json(createdPessoas);
};

const updatePessoas = async(request, response) => {
    const {id} = request.params;

    await pessoasModel.updatePessoas(id, request.body);
    return response.status(204).json();
};

const deletePessoas = async(request, response) => {
    const {id} = request.params;

    await pessoasModel.deletePessoas(id);

    return response.status(204).json();
}

module.exports = {
    getCredoresView,
    getAllPessoas,
    createCredor,
    deletePessoas,
    updatePessoas,
    cadastroCredorView
};