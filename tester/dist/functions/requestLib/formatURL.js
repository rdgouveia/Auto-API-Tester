"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatURL = void 0;
var querystring_1 = require("querystring");
/**
 * @param {any} params Objeto que será transformado em querystring
 * @return {string} Retorna uma string em formato de querystring
 */
function formatURL(params) {
    return querystring_1.stringify(params);
}
exports.formatURL = formatURL;
