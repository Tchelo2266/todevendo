const dividasModel = require('../models/dividasModel');
const pessoasModel = require('../models/pessoasModel');
const mutuariosModel = require('../models/mutuariosModel');

const getDividasView = async(req, res) => {
    const dividas = await dividasModel.getAll();
    res.render('listaDividas.ejs', {dividas: dividas});
}

const cadastroDividasView = async(req, res) => {
    const mutuarios =  await mutuariosModel.getAll();
    const credores = await pessoasModel.getAll();
    // console.log(credores);
    let dados = {
        divida: {},
        credores: credores,
        mutuarios: mutuarios
    }

    res.render('cadastroDivida.ejs', {dados: dados});
}

const getAllDividas = async(request, response) => {
    const dividas = await dividasModel.getAll();
    console.log(dividas);
    return response.status(200).json(dividas);
};

const createDivida = async(request, response) => {
    const createdPessoas = await dividasModel.createDivida(request.body);
    // return response.status(201).json(createdPessoas);
    response.redirect('/listaDividas');
};

const updateDivida = async(request, response) => {
    const {id} = request.params;

    await dividasModel.updateDivida(id, request.body);
    return response.status(204).json();
};

const baixaDivida = async(request, response) => {
    const {id} = request.params;

    await dividasModel.baixaDivida(id);
    // return response.status(204).json();
    response.redirect('/listaDividas');
};


const deleteDivida = async(request, response) => {
    const {id} = request.params;

    await dividasModel.deleteDivida(id);

    return response.status(204).json();
}

module.exports = {
    getDividasView,
    getAllDividas,
    createDivida,
    updateDivida,
    deleteDivida,
    cadastroDividasView,
    baixaDivida
};