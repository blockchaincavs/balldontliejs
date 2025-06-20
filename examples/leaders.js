/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /leaders endpoint
 */

import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

nbaApi.getLeaders()
    .then((data) => {
        console.log(data);
    })
    .catch( (error) => {
        console.log(error);
    });