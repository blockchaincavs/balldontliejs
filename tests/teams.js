/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /teams endpoint
 */

require('dotenv').config;
const NbaApi = require('../balldontliejs');

const API_KEY = process.env.API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * Requesting all teams includeing GLeague
 */
const teams = async () => {
    const responseData = await nbaApi.teams();
    console.log("----Teams----\n", responseData);
}

teams();