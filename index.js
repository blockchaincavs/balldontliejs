/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API
 */

// es modules import
import NbaApi from './src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * Refer to ./usage
 */