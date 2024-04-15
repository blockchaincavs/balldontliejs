/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API
 */

require('dotenv').config();
const API_KEY = process.env.API_KEY;
const NbaApi = require("./balldontliejs");

const nbaApi = new NbaApi(2000, API_KEY);

/**
 * Refer to tests/
 */