const connection = require('../startup/connection');

const getAll = async() => {
    const [dividas] = await connection.execute("SELECT * FROM dividas");
    return dividas;
};

const createDivida = async(divida) => {
    const { mutuario } = divida;
    const { valor } = divida;
    const { credor } = divida;
    const { fixa } = divida;
    const date = new Date();

    console.log(date);
    
    const query = 'INSERT INTO dividas(valor, devedor, quando_fez, credor, fixa) VALUES (?, ?, ?, ?, ?)';

    const [createdDivida] = await connection.execute(query, [valor, mutuario, date, credor, fixa]);
    
    return {insertId: createdDivida.insertId};
};

const updateDivida = async (id, pessoas) => {
    const {nome, status} = pessoas;    
    const query = 'UPDATE dividas SET nome = ?, status = ? WHERE id = ?';

    const [updatePessoa] = await connection.execute(query, [nome, status, id]);

    return updatePessoa;
}

const baixaDivida = async (id) => {
    const query = 'UPDATE dividas SET ativa = 0 WHERE id = ?';

    const [dividaBaixa] = await connection.execute(query, [id]);

    return dividaBaixa;
}

const deleteDivida = async (id) => {
    const removedPessoas = await connection.execute('DELETE FROM dividas WHERE id = ?', [id]);
    return removedPessoas;
};


module.exports = {
    getAll,
    createDivida,
    deleteDivida,
    updateDivida,
    baixaDivida
};