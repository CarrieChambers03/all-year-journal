const express = require("express");
const router = express.Router();

const createAbl = require('../abl/weather_tracker/createAbl.js');
const updateAbl = require('../abl/weather_tracker/updateAbl.js');
const getAbl = require('../abl/weather_tracker/getAbl.js');
const listAbl = require('../abl/weather_tracker/listAbl.js');

router.post('/create', (req, res) => {
    createAbl(req, res);
});

router.post('/update', (req, res) => {
    updateAbl(req, res);
});

router.get('/get', (req, res) => {
    getAbl(req, res);
});

router.get('/list', (req, res) => {
    listAbl(req, res);
});

module.exports = router;