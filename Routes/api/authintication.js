let express = require("express");
const reg = require("../../controllers/reg");
let _ = express.Router();

_.get("/registration", reg);

module.exports = _;
