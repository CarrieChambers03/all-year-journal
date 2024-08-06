const Ajv = require("ajv");
const ajv = new Ajv();

const tetrisDao = require('../../dao/tetris-dao.js');

const schema = {
    type: 'object',
    properties: {
        year: { type: 'string' },
        id: { type: 'string' }
    },
    required: ['year', 'id'],
    additionalProperties: false
}

function deleteAbl (req, res) {
    try {
        const form = req.body;
        const valid = ajv.validate(schema, form);
        if (!valid) {
            return res.status(400).json(ajv.errors);
        }

        const deleted = tetrisDao.del(form);
        if (!deleted) {
            return res.status(404).json({ message: "Not deleted" });
        }
        res.json({ message: "Deleted" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = deleteAbl;