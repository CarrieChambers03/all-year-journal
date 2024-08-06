//importing the required modules
const Ajv = require("ajv");
const ajv = new Ajv();

const tetrisDao = require('../../dao/tetris-dao.js');

//schema
const schema = {
    type: 'object',
    properties: {
        year: { type: 'string' },
        id: { type: 'string' },
        column: { type: 'string', maxLength: 2, minLength: 1, pattern: '^\\d+$' },
        row: { type: 'string', maxLength: 2, minLength: 1, pattern: '^\\d+$' },
        shape: { type: 'string' }
    },
    required: ['year', 'id', 'column', 'row', 'shape'],
    additionalProperties: false
}

function updateAbl (req, res) {
    try {
        const form = req.body;
        const valid = ajv.validate(schema, form);
        if (!valid) {
            return res.status(400).json(ajv.errors);
        }
        
        const updated = tetrisDao.update(form);
        if (!updated) {
            return res.status(404).json({ message: "Not updated" });
        }
        res.json({ message: "Updated" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = updateAbl;