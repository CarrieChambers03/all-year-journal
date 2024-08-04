const Ajv = require("ajv");
const ajv = new Ajv();

const weather_trackerDao = require('../../dao/weather_trackerDao.js');

const schema = {
    type: "object",
    properties: {
        year: { type: "number" },
        month: { type: "string" },
        date: { type: "number" },
        weather: { type: "string" }
    },
    required: ["year", "month", "date", "weather"],
    additionalProperties: false
}

function updateAbl (req, res){
    try {
        const dayUpdate = req.body;
        const valid = ajv.validate(schema, dayUpdate);
        if (!valid) {
            res.status(400).send({ message: "Invalid request body" });
            return;
        }

        dayUpdate.date = "" + dayUpdate.date;
        dayUpdate.year = "" + dayUpdate.year;

        const updated = weather_trackerDao.update(dayUpdate);
        if (!updated) {
            res.status(400).send({ message: "Failed to update weather" });
            return;
        }
        res.json({ message: "Successfully updated weather" });

    } catch (e) {
        res.status(400).send({ message: e.message });
        return;
    }
}

module.exports = updateAbl;