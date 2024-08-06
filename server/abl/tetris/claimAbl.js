const Ajv = require("ajv");
const ajv = new Ajv();

const tetrisDao = require('../../dao/tetris-dao.js');

function claimAbl (req, res) {
    try {
        const claimed = tetrisDao.claim(req.body);
        if (!claimed) {
            return res.status(404).json({ message: "Not claimed" });
        }
        res.json({ message: "Claimed" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = claimAbl;