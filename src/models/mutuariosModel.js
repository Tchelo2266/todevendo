const connection = require('../startup/connection');

const getAll = async() => {
    const [mutuarios] = await connection.execute("SELECT * FROM mutuarios");
    return mutuarios;
};

const createDivida = async(mutuario) => {
    const { nome } = mutuario;
    const { status } = mutuario;
    
    const query = 'INSERT INTO mutuarios(nome, status) VALUES (?, ?)';

    const [createdMutuarios] = await connection.execute(query, [nome, status]);
    
    return {insertId: createdMutuarios.insertId};
};

const updateDivida = async (id, mutuarios) => {
    const {nome, status} = mutuarios;    
    const query = 'UPDATE mutuarios SET nome = ?, status = ? WHERE id = ?';

    const [updateMutuario] = await connection.execute(query, [nome, status, id]);

    return updateMutuario;
}

const deleteDivida = async (id) => {
    const removedMutuarios = await connection.execute('DELETE FROM mutuarios WHERE id = ?', [id]);
    return removedMutuarios;
};


module.exports = {
    getAll,
    createDivida,
    deleteDivida,
    updateDivida
};