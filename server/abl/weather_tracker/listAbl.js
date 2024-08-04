const weather_trackerDao = require('../../dao/weather_trackerDao.js');

function listAbl (req, res) {
    try {
        const weatherSheetYears = weather_trackerDao.list();
        res.json(weatherSheetYears);
    } catch (e) {
        res.status(400).send({ message: e.message });
        return;
    }
}

module.exports = listAbl;