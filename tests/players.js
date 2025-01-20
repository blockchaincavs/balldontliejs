/**
 * @author blockchaincavs
 * @description How to use the BALLDONTLIE API /players/active, /players, and players/<ID> endpoints
 */

// es modules import
import NbaApi from '../src/balldontlie.js';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const nbaApi = new NbaApi(2000, API_KEY);

/**
 * Requesting active players with last name james
 */
nbaApi.getPlayers(undefined, undefined, undefined, undefined, "james", 14, undefined, true)
    .then( (data) => {
        console.log("----Requesting active players with last name tames from Lakers----\n", data);
    })
    .catch( (error) => {
        console.log(error);
    });

/**
 * Requesting player by id.
 */
let jeffGreen = async () => {
    const {data} = await nbaApi.getPlayerById(188)
    console.log("------Player Info By Id------");
    console.log("Player Info:", data);
}
jeffGreen();

nbaApi.getPlayerByName("lebron", undefined)
    .then( (data) => {
        console.log("------Player Info By Name------");
        console.log("Player Info by Name:", data);
    })
    .catch( (error) => {
        console.log(error);
    });

/**
 * Requesting player by name using the players endpont
 */
nbaApi.getPlayers(undefined, undefined, undefined, "Stephen", "Curry")
        .then( (data) => {
            console.log("----Stephen Curry----\n", data);
        })
        .catch( (error) => {
            console.log(error);
        });

/**
 * Requesting 2 players using the players endpoint
 */
nbaApi.getPlayers(undefined, 2)
    .then( (data) => {
        console.log("----Players two players----\n", data);
    })
    .catch( (error) => {
        console.log(error);
    });

/**
 * Requesting players with first/last name james with team id 14 (L.A Lakers)
 */
nbaApi.getPlayers(undefined, undefined, "james", undefined, undefined, 14)
    .then( (data) => {
        console.log("----Requesting players with first/last name james with team id 14----\n", data);
    })
    .catch( (error) => {
        console.log(error);
    });

/**
 * Requesting players from teams 14, 15
 */
nbaApi.getPlayers(undefined, undefined, undefined, undefined, undefined, [14, 15])
    .then( (data) => {
        console.log("----Players from team id 14----\n", data);
    })
    .catch( (error) => {
        console.log(error);
    });
