const express = require("express");
const router = express.Router();

const createAbl = require('../abl/yearly_squares/createAbl.js');
const getAbl = require('../abl/yearly_squares/getAbl.js');
const updateAbl = require('../abl/yearly_squares/updateAbl.js');
const listAbl = require('../abl/yearly_squares/listAbl.js');

router.post('/create', (req, res) => {
    createAbl(req, res);
});

router.get('/get', (req, res) => {
    getAbl(req, res);
});

router.post('/update', (req, res) => {
    updateAbl(req, res);
});

router.get('/list', (req, res) => {
    listAbl(req, res);
});

module.exports = router;