const express = require("express");
const router = express.Router();

const createAbl = require("../abl/tetris/createAbl.js");
const getAbl = require("../abl/tetris/getAbl.js");
const updateAbl = require("../abl/tetris/updateAbl.js");
const listAbl = require("../abl/tetris/listAbl.js");
const finishAbl = require("../abl/tetris/finishAbl.js");
const claimAbl = require("../abl/tetris/claimAbl.js");
const deleteAbl = require("../abl/tetris/deleteAbl.js");

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

router.post('/finish', (req, res) => {
    finishAbl(req, res);
});

router.post('/claim', (req, res) => {
    claimAbl(req, res);
});

router.post('/delete', (req, res) => {
    deleteAbl(req, res);
});

module.exports = router;