/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /games and /games/<ID> endpoint
 */

// es modules import
import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * Requesting Games by date
 */

const startDate = new Date('2018-12-10');
const endDate = new Date('2018-12-17');

nbaApi.getGames(0, 10, [], [], [], false, startDate.toISOString(), endDate.toISOString())
  .then((data) => {
    console.log("------Games between start_date, end_date, 10 per page------");
    console.log("Games:", data);
  })
  .catch( (error) => {
    console.log(error);
  });


/**
 * Requesting specific game by id
 */
const game_id = 1038408;
nbaApi.getGameById(game_id)
  .then((data) => {
      console.log("------Specific Game by id------");
      console.log("Game:" , data);
  })
  .catch( (error) => {
    console.log(error);
  });

/**
 * Requesting all games for season 2023
 */
const season = 2023;
const getGames = async () => {

  try {
    let data = await nbaApi.getGames(0, 10, undefined, season);
    console.log("----Games for 2023 season, 10 per page----\n", data);
  } catch (error) {
    console.log(error);
  }

}

getGames();

