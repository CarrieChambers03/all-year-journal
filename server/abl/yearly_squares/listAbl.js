//importing the required modules
const yearlySquaresDao = require ('../../dao/yearly_squares-dao.js');

function listAbl (req, res) {
    try {
        const { type } = req.query;
        const list = yearlySquaresDao.list(type);
        res.json(list);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = listAbl;