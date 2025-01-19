/**
 * @author blockchaincavs
 * @class Client
 * @description Base axios client
 * 
 */

const axios = require('axios');

class Client {

    /**
     * 
     * @param {string|null} API_KEY 
     * @param {Number} timeout 
     * @description The axios client will be set up with 
     */
    constructor(timeout = 2000, API_KEY = null) {

        this.API_BASE_URL = "http://api.balldontlie.io/v1/";

        // create an axios instance with a common configuration
        this.apiInstance = axios.create({
            baseURL: this.API_BASE_URL, timeout, headers: {Authorization: API_KEY}
        });
    }

    /**
     * Generic method to make HTTP GET requests using Axios.
     * @param {string} endpoint - The API endpoint.
     * @param {Object} params - Query parameters.
     * @return {Object|null} JSON-encoded content of HTTP response or null if error.
     */
    async request(endpoint, params = {}) {
        try {
            const response = await this.apiInstance.get(endpoint, { params });
            console.log("Request made to:", response.config.url);
            return response.data;
        } catch (error) {
            console.error("Error making API request:", error.config.url, error.message);
            return null;
        }
    }
}

module.exports = Client;