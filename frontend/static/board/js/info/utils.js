'use strict';

/**
 *
 * @param response
 * @returns {*}
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

/**
 *
 * @param response
 * @returns {any | Promise<any>}
 */
function parseJSON(response) {
    return response.json();
}

export {checkStatus, parseJSON}