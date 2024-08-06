const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const tetrisPath = path.join(__dirname, "storage", "tetrisList");

function create (form) {
    try {
        const id = crypto.randomBytes(16).toString("hex");
        form.id = id;
        const filePath = path.join(tetrisPath, `${form.year}${id}.json`);
        const fileData = JSON.stringify(form);
        fs.writeFileSync(filePath, fileData);
        return true;
    } catch (e) {
        throw { code: "failedToCreateSheet", message: e.message };
    }
}

function get (id) {
    try {
        const filePath = path.join(tetrisPath, `${id}.json`);
        const fileData = fs.readFileSync(filePath);
        return JSON.parse(fileData);
    } catch (e) {
        if (e.code === "ENOENT") {
            return null;
        }
        throw { code: "failedToGetSheet", message: e.message };
    }
}

function update (form) {
    try {
        const filePath = path.join(tetrisPath, `${form.year}${form.id}.json`);
        const fileData = get(`${form.year}${form.id}`);
        if (!fileData) {
            return false;
        }
        fileData["table"][form.column][form.row] = form.shape;
        fs.writeFileSync(filePath, JSON.stringify(fileData), "utf8");
        return true;
    } catch (e) {
        throw { code: "failedToUpdateSheet", message: e.message };
    }
}

function list () {
    try {
        let files = fs.readdirSync(tetrisPath);
        files = files.map(file => {
            return file.replace(".json", "");
        });
        return files;
    } catch (e) {
        throw { code: "failedToListYears", message: e.message };
    }
}

function finish (form) {
    try {
        const filePath = path.join(tetrisPath, `${form.year}${form.id}.json`);
        fs.unlinkSync(filePath);
        const rewardsFile = JSON.parse(fs.readFileSync(path.join(__dirname, "storage", "rewards.json")));
        rewardsFile["to-claim"] += 1;
        fs.writeFileSync(path.join(__dirname, "storage", "rewards.json"), JSON.stringify(rewardsFile));
        return true;
    } catch (e) {
        throw { message: e.message };
    }
}

function claim () {
    try {
        const rewardsFile = JSON.parse(fs.readFileSync(path.join(__dirname, "storage", "rewards.json")));
        rewardsFile["to-claim"] -= 1;
        rewardsFile["claimed"] += 1;
        fs.writeFileSync(path.join(__dirname, "storage", "rewards.json"), JSON.stringify(rewardsFile));
        return true;
    } catch (e) {
        throw { message: e.message };
    }
}

function del (form) {
    try {
        const filePath = path.join(tetrisPath, `${form.year}${form.id}.json`);
        fs.unlinkSync(filePath);
        return true;
    } catch (e) {
        throw { message: e.message };
    }
}

module.exports = {
    create,
    get,
    update,
    list,
    finish,
    claim,
    del
}