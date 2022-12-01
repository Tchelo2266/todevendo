const connection = require('../startup/connection');

const getAll = async() => {
    const [pessoas] = await connection.execute("SELECT * FROM pessoas");
    return pessoas;
};

const createPessoas = async(pessoa) => {
    const { nome } = pessoa;
    const { status } = pessoa;
    
    const query = 'INSERT INTO pessoas(nome, status) VALUES (?, ?)';

    const [createdPessoas] = await connection.execute(query, [nome, status]);
    
    return createdPessoas;
};

module.exports = {
    getAll,
    createPessoas
};