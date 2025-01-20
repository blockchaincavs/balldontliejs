/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /box_scores/live endpoint
 */

import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

nbaApi.getBoxScoresLive()
    .then((data) => {
        console.log(`------Live Box Scores for today ${new Date().toISOString()}------`);
        console.log(data);
    })
    .catch( (error) => {
        console.log(error);
    });