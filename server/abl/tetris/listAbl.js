//import dao
const tetrisDao = require('../../dao/tetris-dao.js');

function listAbl (req, res) {
    try {
        const list = tetrisDao.list();
        res.json(list);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = listAbl;