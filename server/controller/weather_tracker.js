const express = require("express");
const router = express.Router();

const createAbl = require('../abl/weather_tracker/createAbl.js');

router.post('/create', (req, res) => {
    createAbl(req, res);
});

module.exports = router;