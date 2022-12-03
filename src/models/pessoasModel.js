const connection = require('../startup/connection');

const getAll = async() => {
    const [pessoas] = await connection.execute("SELECT * FROM credor");
    // console.log("pessoas",pessoas);
    return pessoas;
};

const createPessoas = async(pessoa) => {
    const { nome } = pessoa;
    const { status } = pessoa;

    const query = 'INSERT INTO credor(nome, status) VALUES (?, ?)';

    const [createdPessoas] = await connection.execute(query, [nome, status]);
    
    return {insertId: createdPessoas.insertId};
};

const deletePessoas = async (id) => {
    const removedPessoas = await connection.execute('DELETE FROM credor WHERE id = ?', [id]);
    return removedPessoas;
};

const updatePessoas = async (id, pessoas) => {
    const {nome, status} = pessoas;    
    const query = 'UPDATE credor SET nome = ?, status = ? WHERE id = ?';

    const [updatePessoa] = await connection.execute(query, [nome, status, id]);

    return updatePessoa;
}

module.exports = {
    getAll,
    createPessoas,
    deletePessoas,
    updatePessoas
};