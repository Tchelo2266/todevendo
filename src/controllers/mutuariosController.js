const mutuariosModel = require('../models/mutuariosModel');

const getMutuariosView = async(req, res) => {
    const mutuarios = await mutuariosModel.getAll();
    res.render('listaMutuarios.ejs', {mutuarios: mutuarios});
}

const cadastroMutuariosView = (req, res) => {
    res.render('cadastroMutuario.ejs', {mutuario: {}});
}

const getAllMutuarios = async(request, response) => {
    const mutuarios = await mutuariosModel.getAll();
    return response.status(200).json(mutuarios);
};

const createMutuario = (request, response) => {
    const createdMutuarios =  mutuariosModel.createMutuario(request.body);
    // return response.status(201).json(createdMutuarios);
    response.redirect('/listaMutuarios');
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