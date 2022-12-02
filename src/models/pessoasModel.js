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
    
    return {insertId: createdPessoas.insertId};
};

const deletePessoas = async (id) => {
    const removedPessoas = await connection.execute('DELETE FROM pessoas WHERE id = ?', [id]);
    return removedPessoas;
};

const updatePessoas = async (id, pessoas) => {
    const {nome, status} = pessoas;    
    const query = 'UPDATE pessoas SET nome = ?, status = ? WHERE id = ?';

    const [updatePessoa] = await connection.execute(query, [nome, status, id]);

    return updatePessoa;
}

module.exports = {
    getAll,
    createPessoas,
    deletePessoas,
    updatePessoas
};