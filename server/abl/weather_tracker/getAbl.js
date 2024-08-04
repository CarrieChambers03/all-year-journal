const Ajv = require("ajv");
const ajv = new Ajv();

const weather_trackerDao = require('../../dao/weather_trackerDao.js');

const schema = {
    type: "object",
    properties: {
        year: { type: "string" }
    },
    required: ["year"],
    additionalProperties: false
}

function getAbl (req, res) {
    try {
        const valid = ajv.validate(schema, req.query);
        if (!valid) {
            res.status(400).send({ message: "Invalid request body" });
            return;
        }
        const year = req.query.year;

        const weatherSheet = weather_trackerDao.get(year);
        if (!weatherSheet) {
            res.status(400).send({ message: "Failed to get weather" });
            return;
        }

        res.json(weatherSheet);
    } catch (e) {
        res.status(400).send({ message: e.message });
        return;
    }
}

module.exports = getAbl;