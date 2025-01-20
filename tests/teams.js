/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /teams endpoint
 */

// es modules import
import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * Requesting all teams includeing GLeague
 */
const teams = async () => {
    
    try {
        const responseData = await nbaApi.getTeams();
        console.log("----Teams----\n", responseData);
    } catch (error) {
        console.log(error);
    }

}

teams();