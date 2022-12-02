const connection = require('../startup/connection');

const getAll = async() => {
    const [pessoas] = await connection.execute("SELECT * FROM dividas");
    return pessoas;
};

const createDivida = async(pessoa) => {
    const { nome } = pessoa;
    const { status } = pessoa;
    
    const query = 'INSERT INTO dividas(nome, status) VALUES (?, ?)';

    const [createdPessoas] = await connection.execute(query, [nome, status]);
    
    return {insertId: createdPessoas.insertId};
};

const updateDivida = async (id, pessoas) => {
    const {nome, status} = pessoas;    
    const query = 'UPDATE dividas SET nome = ?, status = ? WHERE id = ?';

    const [updatePessoa] = await connection.execute(query, [nome, status, id]);

    return updatePessoa;
}

const deleteDivida = async (id) => {
    const removedPessoas = await connection.execute('DELETE FROM dividas WHERE id = ?', [id]);
    return removedPessoas;
};


module.exports = {
    getAll,
    createDivida,
    deleteDivida,
    updateDivida
};