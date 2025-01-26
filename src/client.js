/**
 * @author blockchaincavs
 * @class Client
 * @description Base axios client
 * 
 */

import { ApiError, 
    AuthenticationError,
    BadRequestError,
    ResourceNotFoundError,
    RateLimitError,
    ServerError
} from './errors.js';
import axios from 'axios';

class Client {

    /**
     * 
     * @param {string|null} API_KEY 
     * @param {Number} timeout 
     * @description The axios client will be set up with 
     */
    constructor(timeout = 2000, API_KEY = null) {

        this.API_BASE_URL = "http://api.balldontlie.io/v1";

        // create an axios instance with a common configuration
        this.apiInstance = axios.create({
            baseURL: this.API_BASE_URL, timeout, headers: {Authorization: API_KEY}
        });
    }

    /**
     * Generic method to make HTTP GET requests using Axios.
     * @param {string} endpoint - The API endpoint.
     * @param {Object} params - Query parameters.
     * @return {Object} JSON-encoded content of HTTP response or null if error.
     */
    async request(endpoint, params = {}) {
        try {

            const response = await this.apiInstance.get(endpoint, { params });
            console.log("Request made to:", response.config.url);

            return response.data;
            
        } catch (error) {

            // Throw custom errors
            if (axios.isAxiosError(error)) {

                const resource = error.config.url;
                const statusText = error.response || "An unexpected error occurred";
                const status = error.status || 500;
                const message = statusText != undefined ? statusText : error.message; 

                switch (status) {
                    case 400:
                        throw new BadRequestError(resource, message, status);
                    case 401:
                        throw new AuthenticationError(resource, message, status);
                    case 404:
                        throw new ResourceNotFoundError(resource, message, status);
                    case 429:
                        throw new RateLimitError(resource, message, status);
                    case 500:
                    case 502:
                    case 503:
                    case 504:
                        throw new ServerError(resource, message, status);
                    default:
                        throw new ApiError(resource, message, status);
                }
            }

            // Generic error, should not happen
            throw new ApiError(endpoint, "An unexpected error occurred", 500);
            
        }
    }
}

export default Client;