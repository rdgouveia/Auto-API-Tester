/**
 * @param {number} max Valor total que deverá ser gerado pela função
 * @return {number} Retorna valor inteiro
 */
export function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}
