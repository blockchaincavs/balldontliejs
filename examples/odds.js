/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /odds endpoint
 */

import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

try {
    // requires a game id or date
    const bettingOdds = await nbaApi.getBettingOdds("2025-01-26", 15908084);
    console.log(bettingOdds);
} catch (error) {
    console.error(error)
}