const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const yearlySquaresController = require('./controller/yearly_squares.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5000"}));

app.use('/yearly_squares', yearlySquaresController);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});