"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} max Valor total que deverá ser gerado pela função
 * @return {number} Retorna valor inteiro
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
exports.getRandomNumber = getRandomNumber;
