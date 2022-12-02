const pessoasModel = require('../models/dividasModel');

const getDividasView = (req, res) => {
    res.render('listaDividas.ejs', {dividas: []});
}

const cadastroDividasView = (req, res) => {
    res.render('cadastroDivida.ejs', {dividas: []});
}

const getAllDividas = async(request, response) => {
    const pessoas = await pessoasModel.getAll();
    return response.status(200).json(pessoas);
};

const createDivida = async(request, response) => {
    const createdPessoas = await pessoasModel.createDivida(request.body);
    return response.status(201).json(createdPessoas);
};

const updateDivida = async(request, response) => {
    const {id} = request.params;

    await pessoasModel.updateDivida(id, request.body);
    return response.status(204).json();
};

const deleteDivida = async(request, response) => {
    const {id} = request.params;

    await pessoasModel.deleteDivida(id);

    return response.status(204).json();
}

module.exports = {
    getDividasView,
    getAllDividas,
    createDivida,
    updateDivida,
    deleteDivida,
    cadastroDividasView
};