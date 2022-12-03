const pessoasModel = require('../models/pessoasModel');

const getCredoresView = async(req, res) => {
    const credores = await pessoasModel.getAll();
    // console.log(credores);
    res.render('listaCredor.ejs', {credores: credores});
}

const cadastroCredorView = (req, res) => {
    res.render('cadastroCredor.ejs', {credor: {}}   );
}

const getAllPessoas = async(request, response) => {
    const pessoas = await pessoasModel.getAll();
    return response.status(200).json(pessoas);
};

const createCredor = (request, response) => {
    //Funcionando
    const createdPessoas =  pessoasModel.createPessoas(request.body);
    // return response.status(201).json(createdPessoas);
    response.redirect('/listaCredor');
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