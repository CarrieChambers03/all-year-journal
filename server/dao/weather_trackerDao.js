const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const weatherTrackerPath = path.join(__dirname, "storage", "weather_trackerList");

function create(weatherSheet){
    try {
        const filePath = path.join(weatherTrackerPath, `${weatherSheet.year}.json`);
        const fileData = JSON.stringify(weatherSheet);
        fs.writeFileSync(filePath, fileData, "utf8");
        return true;
    } catch (e) {
        throw { code: "failedToCreateWeatherSheet", message: e.message };
    }
}

module.exports = {
    create
}