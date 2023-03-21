let express = require("express");
let _ = express.Router();
const authRoute = require("./authintication.js");

_.use("/authentication", authRoute);

module.exports = _;
