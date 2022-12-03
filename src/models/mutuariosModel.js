const connection = require('../startup/connection');

const getAll = async() => {
    const [mutuarios] = await connection.execute("SELECT * FROM mutuario");
    // console.log(mutuarios);
    return mutuarios;
};

const createMutuario = async(mutuario) => {
    const { nome } = mutuario;
    const { status } = mutuario;
    
    const query = 'INSERT INTO mutuario(nome, status) VALUES (?, ?)';

    const [createdMutuarios] = await connection.execute(query, [nome, status]);
    
    return {insertId: createdMutuarios.insertId};
};

const updateMutuario = async (id, mutuarios) => {
    const {nome, status} = mutuarios;    
    const query = 'UPDATE mutuario SET nome = ?, status = ? WHERE id = ?';

    const [updateMutuario] = await connection.execute(query, [nome, status, id]);

    return updateMutuario;
}

const deleteMutuario = async (id) => {
    const removedMutuarios = await connection.execute('DELETE FROM mutuario WHERE id = ?', [id]);
    return removedMutuarios;
};


module.exports = {
    getAll,
    createMutuario,
    updateMutuario,
    deleteMutuario
};