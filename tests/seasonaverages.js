/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /season_averages endpoint
 */

// es modules import
import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * requesting season average data for player 237 (lebron james) 2022 season
 */
const playerId = 237;
nbaApi.getSeasonAverages(2022, playerId)
        .then( (data) => {
            console.log(`------Player Averages for player id ${playerId}------\n`, data);
        })
        .catch( (error) => {
            console.log(error);
        });