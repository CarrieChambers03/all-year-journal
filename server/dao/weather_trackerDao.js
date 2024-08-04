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

function get(year){
    try {
        const filePath = path.join(weatherTrackerPath, `${year}.json`);
        const fileData = fs.readFileSync(filePath, "utf8");
        return JSON.parse(fileData);
    } catch (e){
        if (e.code === "ENOENT") {
            return null;
        }
        throw { code: "failedToGetActivity", message: e.message };
    }
}

function update(day){
    try {
        const filePath = path.join(weatherTrackerPath, `${day.year}.json`);
        const fileData = get(day.year);
        if (fileData){
            fileData["weather"][day.month][day.date] = day.weather;
            fs.writeFileSync(filePath, JSON.stringify(fileData), "utf8");
            return true;
        }
    } catch (e) {
        throw { code: "failedToUpdateWeather", message: e.message };
    }
}

function list(){
    try {
        let files = fs.readdirSync(weatherTrackerPath);
        files = files.map(file => {
            return file.replace(".json", "");
        });
        return files;
    } catch (e) {
        throw { code: "failedToListWeatherSheetYears", message: e.message };
    }
}

module.exports = {
    create,
    get,
    update,
    list
}