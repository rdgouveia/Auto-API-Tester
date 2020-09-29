import { stringify } from "querystring";

/**
 * @param {any} params Objeto que será transformado em querystring
 * @return {string} Retorna uma string em formato de querystring
 */
export function formatURL(params: any): string {
  return stringify(params);
}
