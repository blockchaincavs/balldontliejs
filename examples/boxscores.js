/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /box_scores endpoint
 */

import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

const gamesDate = new Date('2024-04-14');
nbaApi.getBoxScores(gamesDate.toISOString())
    .then( (data) => {
        console.log(`------Box Scores for today ${new Date().toISOString()}------`);
        console.log(data);
    })
    .catch( (error) => {
        console.log(error);
    });

const gameData = await nbaApi.getBoxScores("2025-06-22");
console.log(gameData);