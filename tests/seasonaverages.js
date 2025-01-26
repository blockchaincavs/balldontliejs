/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /season_averages endpoint
 */

// es modules import
import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALL_DONT_LIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * requesting season average data of 4 different players for 2022 season
 */
const playerIds = [237, 3, 78, 145];
nbaApi.getSeasonAverages(2022, playerIds)
        .then( (data) => {
            console.log("------Player Averages by player ID and season------\n", data);
        })
        .catch( (error) => {
            console.log(error);
        });