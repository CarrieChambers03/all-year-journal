//importing the required modules
const Ajv = require("ajv");
const ajv = new Ajv();
const yearlySquaresDao = require ('../../dao/yearly_squares-dao.js');

//schema
const schema = {
    type: "object",
    properties: {
        year: { type: "number" },
        type: { type: "string" },
        month: { type: "string" },
        date: { type: "number" },
        value: { type: "string" }
    },
    required: ["year", "type", "month", "date", "value"],
    additionalProperties: false
}

//function
function updateAbl (req, res) {
    try {
        const dayUpdate = req.body;
        const valid = ajv.validate(schema, dayUpdate);
        if (!valid) {
            res.status(400).send({ message: "Invalid request body" });
            return;
        }

        dayUpdate.year = "" + dayUpdate.year;
        dayUpdate.date = "" + dayUpdate.date;

        const updated = yearlySquaresDao.update(dayUpdate);
        if (!updated) {
            res.status(404).send({ message: "Not updated" });
            return;
        }
        res.json({ message: "Updated" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = updateAbl;