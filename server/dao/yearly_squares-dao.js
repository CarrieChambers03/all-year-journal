const fs = require("fs");
const path = require("path");

const paths = {
    weather_tracker: path.join(__dirname, "storage", "weather_trackerList"),
    period_tracker: path.join(__dirname, "storage", "period_trackerList")
}

function create (sheet) {
    try {
        const filePath = path.join(paths[sheet.type], `${sheet.year}.json`);
        const { type, ...data} = sheet;
        const fileData = JSON.stringify(data);
        fs.writeFileSync(filePath, fileData, "utf8");
        return true;
    } catch (e) {
        throw { code: "failedToCreateSheet", message: e.message };
    }
}

function get(form){
    try {
        const filePath = path.join(paths[form.type], `${form.year}.json`);
        const fileData = fs.readFileSync(filePath);
        return JSON.parse(fileData);
    } catch (e){
        if (e.code === "ENOENT") {
            return null;
        }
        throw { code: "failedToGetSheet", message: e.message };
    }
}

function update (form) {
    try {
        const filePath = path.join(paths[form.type], `${form.year}.json`);
        const fileData = get(form);
        if (fileData) {
            fileData["dates"][form.month][form.date] = form.value;
            const { type, ...data } = fileData;
            fs.writeFileSync(filePath, JSON.stringify(data), "utf8");
            return true;
        }

    } catch (e) {
        throw { code: "failedToUpdateSheet", message: e.message };
    }
}

function list (type) {
    try {
        let files = fs.readdirSync(paths[type]);
        files = files.map(file => {
            return file.replace(".json", "");
        });
        return files;
    } catch (e) {
        throw { code: "failedToListYears", message: e.message };
    }
}

module.exports = {
    create,
    get,
    update,
    list
}