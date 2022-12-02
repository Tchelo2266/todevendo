const pessoasModel = require('../models/pessoasModel')

const getAllPessoas = async(request, response) => {
    const pessoas = await pessoasModel.getAll();
    return response.status(200).json(pessoas);
};

const createPessoas = async(request, response) => {
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
    getAllPessoas,
    createPessoas,
    deletePessoas,
    updatePessoas
};