/**
 * 
 * @author blockchaincavs
 * @class BallDontLieApi
 * @description This class will interface with the balldontlie api.
 * 
 * Endpoint: https://www.balldontlie.io/api/v1/players
 * New Endpoint: curl "https://api.balldontlie.io/v1/players" -H "Authorization: YOUR_API_KEY"
 * params: page, per_page (default 25 max = 100), search (filter based off name)
 * 
 * Endpoint: https://api.balldontlie.io/v1/box_scores/?date="YYYY-MM-DD" -H "Authorization: YOUR_API_KEY"
 * 
 * Error Code: 400 Bad Request -- Your request is invalid.
 * 401	Unauthorized - You either need an API key or your account tier does not have access to the endpoint.
 * Error Code: 404 Not Found -- The specified resource could not be found.
 * Error Code: 406 Not Acceptable -- You requested a format that isn't json.
 * Error Code: 429 Too many requests -- Stop bombarding us.
 * Error Code: 500 Internal Sever Error -- We had a poroblem with our server. Try again later.
 * Error Code: 503 Service Unavailable -- We're temporarily offline for maintenance. Please try again later.
 * 
 */

import Client from '../src/client.js';

class BallDontLieApi {

  /**
   * @description The NbaApi Class will make http requests to various balldontlie endpoints.
   */
  constructor(timeout = 2000, API_KEY=null) {

    this.BASE_URL = "https://api.balldontlie.io/v1";
    this.client = new Client(timeout, this.BASE_URL, API_KEY);

  }

  /**
   * @description Return a string representation of NbaApi instance.
   * @return {String}
   */
  toString() {
    return "BALLDONTLIE API";
  }

  /**
   * @description Get single player info by player id.
   * @param {number} id The player id to retrieve.
   * @return {Promise<Object> | null} JSON-encoded content of HTTP response or null if error.
   */
  async getPlayerById(id = 237) {
    const endpoint = `/players/${id}`;
    if (id <= 0) {
      console.error("Invalid Player ID");
      return null;
    }
    return this.client.request(endpoint);
  }

  /**
   * @description Get all players with name=name in their name.
   * @param {string} first_name - The name to search for.
   * @param {string} last_name - The name to search for.
   * @return {Promise<Array>} JSON array of players or null if error.
   */
  async getPlayerByName(first_name="", last_name="") {
    const endpoint = "/players";
    const params = { cursor: 0, per_page: 25, first_name, last_name };
    return this.client.request(endpoint, params);
  }

  /**
   * @description Get all players
   * @param {number} cursor Page number to request. Default is page 0.
   * @param {number} per_page Number of items per page. Default is 25 Max is 100.
   * @param {string} search String that matches player first name or last name.
   * @param {string} first_name Player first name
   * @param {Array} last_name Player last name
   * @param {Array} team_ids Array of team ids.
   * @param {Array} player_ids Array of player ids.
   * @param {boolean} active Default false. Indacates whether to request from /players/active endpoint
   * @return {Promise<Object>} JSON array of games and Meta information or null if error.
   */
  async getPlayers(cursor=0, per_page=25, search="", first_name="", last_name="", team_ids=[], player_ids=[], active=false) {
    const endpoint = active ? "/players/active" : "/players"
    const params = {cursor, per_page, search, first_name, last_name, 'team_ids[]':team_ids, 'player_ids[]':player_ids};
    return this.client.request(endpoint, params);
  }

  /**
   * @description Get all NBA teams.
   * @param {number} cursor Page number to request. Default is page 0.
   * @param {number} per_page Number of items per page. Default is 30 (only 30 teams in NBA).
   * @return {Promise<Object>} Teams (JSON array of teams) and Meta information or null if error.
   */
  async getTeams(cursor = 0, per_page = 30) {
    const endpoint = "/teams";
    const params = { cursor, per_page };
    return this.client.request(endpoint, params);
  }

  /**
   * @description Get all games between a start_date and end_date.
   * @param {number} cursor Page number to request. Default is page 0.
   * @param {number} per_page Number of items per page. Default is 25 Max is 100.
   * @param {Array} dates Array of dates formatted YYYY-MM-DD.
   * @param {Array} seasons Array of seasons.
   * @param {Array} team_ids Array of team ids.
   * @param {string} post_season Whether it's post-season or not.
   * @param {string} start_date YYYY-MM-DD select games that occur on or after this date.
   * @param {string} end_date YYYY-MM-DD select games that occur on or before this date.
   * @return {Promise<Object>} JSON array of games and Meta information or null if error.
   */
  async getGames(cursor=0, per_page=25, dates=[], seasons=[], team_ids=[], post_season="false", start_date=null, end_date=null) {
    const endpoint = "/games";
    const params = {
        cursor, per_page, 'dates[]': dates, 'seasons[]': seasons, 'team_ids[]': team_ids, 
        post_season, start_date, end_date 
    };
    
    return this.client.request(endpoint, params);
  }

  /**
   * @description Get a specific game by id.
   * @param {number} id The game id to retrieve.
   * @return {Promise<Object>} JSON-encoded content of HTTP response or null if error.
   */
  async getGameById(id = 440) {
    const endpoint = `/games/${id}`;
    return this.client.request(endpoint);
  }

  /**
   * @description Get all stats between a start_date and end_date.
   * @param {number} cursor Page number to request. Default is page 0.
   * @param {number} per_page Number of items per page. Default is 25. Max is 100
   * @param {Array} dates Array of dates formatted YYYY-MM-DD.
   * @param {Array} seasons Array of seasons.
   * @param {Array} player_ids Array of player ids.
   * @param {Array} game_ids Array of game ids.
   * @param {string} postseason Whether it's post-season or not (string true or false).
   * @param {string} start_date YYYY-MM-DD select games that occur on or after this date.
   * @param {string} end_date YYYY-MM-DD select games that occur on or before this date.
   * @return {Promise<Object>} JSON array of stats and Meta information or null if error.
   */
  async getStats(cursor = 0, per_page = 25, dates = [], seasons = [], player_ids = [], game_ids = [], postseason = "false", start_date = null, end_date = null) {
    const endpoint = "/stats";
    const params = { 
      cursor, per_page, 'dates[]': dates, 'seasons[]':seasons, 'player_ids[]':player_ids, 
      'game_ids[]': game_ids, postseason, start_date, end_date 
    };
    return this.client.request(endpoint, params);
  }

  /**
   * @description Get season averages of specific players.
   * @param {number} season The season to retrieve player averages from.
   * @param {Number} player_id .
   * @return {Promise<Array>} JSON array of player averages or null if error.
   */
  async getSeasonAverages(season=2023, player_id) {
    const endpoint = "/season_averages";
    const params = { season, player_id };
    return this.client.request(endpoint, params);
  }

  /**
   * @description Retrieve all player injuries
   * @param {Number} cursor used for pagination
   * @param {Number} per_page Number of items per page. Default is 25. Max is 100
   * @param {Array} team_ids 
   * @return {Promise<Object>}
   */
  async getPlayerInjuries(cursor=0, per_page=25, team_ids=[], player_ids=[]) {
    const endpoint = "/player_injuries";
    const params = {
      cursor, per_page,
      'team_ids[]': team_ids, 'player_ids': player_ids
    };
    return this.client.request(endpoint, params);
  }

  /**
   * @param {Number} season  
   * @return {Promise<Object>}
   */
  async getStandings(season=2024) {
    const endpoint = "/standings";
    const params = { season };
    return this.client.request(endpoint, params);
  }

  /**
   * @param {String} stat_type Returns leaders for: reb, dreb, tov, ast, oreb, min, pts, stl, blk
   * @param {Number} season 
   */
  async getLeaders(stat_type="pts", season=2024) {
    const endpoint = "/leaders";
    const params = { stat_type, season };
    return this.client.request(endpoint, params);
  }

  /**
   * @description Retreives betting odds. Date or game_id must be present
   * @param {String} date Format: YYYY-MM-DD
   * @param {Promise<object>|null} game_id 
   */
  async getBettingOdds(date, game_id) {
    const endpoint = "/odds";
    let params = {};
    
    if (!date && !game_id) {
      throw Error("Odds endpoint requires date or game_id");
    }

    if (date) {
      params = { date };
    }
    if (game_id) {
      params = {...params, game_id};
    }

    return this.client.request(endpoint, params);
  }

  /**
  * Get live box scores.
  * @return {Promise<Object>} JSON array of live box scores or null if error.
  */
  async getBoxScoresLive() {
    const endpoint = "/box_scores/live";
    return this.client.request(endpoint);
  }

  /**
  * Get box scores for a specific date.
  * @param {string} date Format: YYYY-MM-DD
  * @return {Promise<Object>} JSON array of box scores or error if error.
  */
  async getBoxScores(date) {
    const endpoint = "/box_scores";
    const params = { date };
    return this.client.request(endpoint, params);
  }

}

export default BallDontLieApi;
