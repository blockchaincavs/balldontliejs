
/**
 * @author blockchaincavs
 * @class ApiError
 * @description Base class for http client errors
 * 
 */
class ApiError extends Error {

    /**
     * 
     * @param {string} endpoint
     * @param {string} message 
     * @param {Number} statusCode 
     */
    constructor(endpoint, message, statusCode) {

        super(message);

        this.name = "ApiError";
        this.endpoint = endpoint;
        this.statusCode = statusCode;
    }
}

/**
 * Custom Errors
 */
class AuthenticationError extends ApiError {}
class BadRequestError extends ApiError {}
class ResourceNotFoundError extends ApiError {}
class RateLimitError extends ApiError {}
class ServerError extends ApiError {}

module.exports = {
    ApiError,
    AuthenticationError,
    BadRequestError,
    ResourceNotFoundError,
    RateLimitError,
    ServerError
}