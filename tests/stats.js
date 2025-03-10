/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /stats endpoints
 */

// es modules import
import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/*
    Get Stats by game ids array
*/
const gameIds = [1038183, 1038184];
nbaApi.getStats(null,null,null,null,null, gameIds)
        .then((stats) => {

            console.log("------Stats by Game ID Array------");
            console.log("------postseason param must be string------")
            console.log("Game stats:" , stats);

        })
        .catch( (error) => {
            console.log(error);
        });