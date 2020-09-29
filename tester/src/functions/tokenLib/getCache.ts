import { readJSON } from "fs-extra";

/**
 * @return {Promise<any>} Retorna o objeto com o token para ser utilizado na requisição da API que está sendo testada ou uma mensagem de erro
 */
export async function getCache(): Promise<any> {
  try {
    const cacheToken = await readJSON("token/authToken.json");
    return cacheToken;
  } catch (e) {
    return { message: "error" };
  }
}
