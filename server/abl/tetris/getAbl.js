const Ajv = require("ajv");
const ajv = new Ajv();

const tetrisDao = require('../../dao/tetris-dao.js');

const schema = {
    type: "string"
}

function getAbl (req, res) {
    try {
        const id = req.query.id;
        const valid = ajv.validate(schema, id);
        if (!valid) {
            return res.status(400).json(ajv.errors);
        }
        const data = tetrisDao.get(id);
        if (!data) {
            return res.status(404).json({ message: "Not found" });
        }
        return res.json(data);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = getAbl;