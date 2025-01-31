//importing the necessary files and functions
const Ajv = require("ajv");
const ajv = new Ajv();
const yearlySquaresDao = require ('../../dao/yearly_squares-dao.js');

//schema
const schema = {
    type: "object",
    properties: {
        type: { type: "string" }
    },
    required: ["type"]
}

//helper function
function leapYear(year){
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

//main function
function createAbl(req, res) {
    try {
        //validating the request
        const valid = ajv.validate(schema, req.body);
        if (!valid){
            return res.status(400).json(ajv.errors);
        }

        //creating general structure
        const sheet = {
            dates: {
                january: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: "",
                    31: ""
                },
                february: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: ""
                },
                march: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: "",
                    31: ""
                },
                april: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: ""
                },
                may: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: "",
                    31: ""
                },
                june: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: ""
                },
                july: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: "",
                    31: ""
                },
                august: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: "",
                    31: ""
                },
                september: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: ""
                },
                october: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: "",
                    31: ""
                },
                november: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: ""
                },
                december: {
                    1: "",
                    2: "",
                    3: "",
                    4: "",
                    5: "",
                    6: "",
                    7: "",
                    8: "",
                    9: "",
                    10: "",
                    11: "",
                    12: "",
                    13: "",
                    14: "",
                    15: "",
                    16: "",
                    17: "",
                    18: "",
                    19: "",
                    20: "",
                    21: "",
                    22: "",
                    23: "",
                    24: "",
                    25: "",
                    26: "",
                    27: "",
                    28: "",
                    29: "",
                    30: "",
                    31: ""
                }
            }
        }
        sheet.year = new Date().getFullYear();
        if (leapYear(sheet.year)){
            sheet.dates.february[29] = "";
        }

        //adding the distinguisher
        sheet.type = req.body.type;

        //creating the sheet
        const created = yearlySquaresDao.create(sheet);
        if (!created){
            return res.status(400).json({ message: "Sheet not created" });
        }
        return res.json({ message: "Sheet created" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = createAbl;