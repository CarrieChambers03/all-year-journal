const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const weatherTrackerController = require('./controller/weather_tracker.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5000"}));

app.use('/weather_tracker', weatherTrackerController);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});