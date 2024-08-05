const Ajv = require("ajv");
const ajv = new Ajv();

const yearlySquaresDao = require ('../../dao/yearly_squares-dao.js');

const schema = {
    type: "object",
    properties: {
        year: { type: "string" },
        type: { type: "string" }
    },
    required: ["year", "type"],
    additionalProperties: false
}

function getAbl (req, res) {
    try {
        const valid = ajv.validate(schema, req.query);
        if (!valid) {
            res.status(400).send({ message: "Invalid request body" });
            return;
        }
        const { year, type } = req.query;
        const form = { year, type };
        const data = yearlySquaresDao.get(form);
        if (!data) {
            res.status(404).send({ message: "Not found" });
            return;
        }
        res.json(data);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = getAbl;