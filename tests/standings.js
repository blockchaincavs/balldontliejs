/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /standings endpoint
 */

// es modules import
import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

try {
    const responseData = await nbaApi.getStandings();
    console.log(responseData);
} catch (error) {
    console.log(error);
}

