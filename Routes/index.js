let express = require("express");
let _ = express.Router();
const apiRoutes = require("./api");

let api = process.env.BASE_URL;

_.use(api, apiRoutes);

module.exports = _;
