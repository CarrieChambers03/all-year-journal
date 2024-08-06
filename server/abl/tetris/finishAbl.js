const Ajv = require("ajv");
const ajv = new Ajv();

const tetrisDao = require('../../dao/tetris-dao.js');

function finishAbl (req, res) {
    try {
        const form = req.body;
        const finished = tetrisDao.finish(form);
        if (!finished) {
            return res.status(404).json({ message: "Not finished" });
        }
        res.json({ message: "Finished" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = finishAbl;