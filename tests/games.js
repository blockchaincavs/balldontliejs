/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /games and /games/<ID> endpoint
 */

require('dotenv').config;
const NbaApi = require('../balldontliejs');

const API_KEY = process.env.API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);


/**
 * Requesting Games by date
 */

const startDate = new Date('2018-12-10');
const endDate = new Date('2018-12-17');

nbaApi.games(0, 10, [], [], [], false, startDate.toISOString(), endDate.toISOString())
  .then((data) => {
    console.log("------Games between start_date, end_date, 10 per page------");
    console.log("Games:", data);
  });


/**
 * Requesting specific game by id
 */
const game_id = 1038408;
const game = nbaApi.gameById(id=game_id)
                .then((data) => {
                    console.log("------Specific Game by id------");
                    console.log("Game:" , data);
                });

/**
 * Requesting all games for season 2023
 */
const season = 2023;
const getGames = async () => {
   let data = await nbaApi.games(0, 10, undefined, season);
   console.log("----Games for 2023 season, 10 per page----\n", data);
}
getGames();

