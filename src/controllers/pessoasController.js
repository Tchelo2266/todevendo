const pessoasModel = require('../models/pessoasModel')

const getAllPessoas = async(request, response) => {
    const pessoas = await pessoasModel.getAll();
    return response.status(200).json(pessoas);
};

const createPessoas = async(request, response) => {
    const createdPessoas = await pessoasModel.createPessoas(request.body);
    return response.status(201).json(createdPessoas);
};

module.exports = {
    getAllPessoas,
    createPessoas
};