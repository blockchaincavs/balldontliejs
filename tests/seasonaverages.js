/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /season_averages endpoint
 */

require('dotenv').config();
const NbaApi = require('../src/balldontlie');

const API_KEY = process.env.API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * requesting season average data of 4 different players for 2022 season
 */
const playerIds = [237, 3, 78, 145];
nbaApi.getSeasonAverages(season=2022, player_ids=playerIds)
        .then((data) => {
            console.log("------Player Averages by player ID and season------\n", data);
        });