const mutuariosModel = require('../models/mutuariosModel');

const getMutuariosView = (req, res) => {
    res.render('listaMutuarios.ejs', {mutuarios: []});
}

const cadastroMutuariosView = (req, res) => {
    res.render('cadastroMutuario.ejs', {mutuarios: []});
}

const getAllMutuarios = async(request, response) => {
    const mutuarios = await mutuariosModel.getAll();
    return response.status(200).json(mutuarios);
};

const createMutuario = async(request, response) => {
    const createdMutuarios = await mutuariosModel.createMutuario(request.body);
    return response.status(201).json(createdMutuarios);
};

const updateMutuario = async(request, response) => {
    const {id} = request.params;

    await mutuariosModel.updateMutuario(id, request.body);
    return response.status(204).json();
};

const deleteMutuario = async(request, response) => {
    const {id} = request.params;

    await mutuariosModel.deleteMutuario(id);

    return response.status(204).json();
}

module.exports = {
    getMutuariosView,
    getAllMutuarios,
    createMutuario,
    updateMutuario,
    deleteMutuario,
    cadastroMutuariosView
};