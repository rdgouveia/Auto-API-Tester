import { getCache } from "./getCache";
import { newToken } from "./newToken";

/**
 * @param {any} data Objeto com as informações pra chamar o token
 * @return {Promise<string>} Retorna o token para ser utilizado na requisição da API que está sendo testada
 */
export async function getToken(data: any): Promise<string> {
  const authToken = await getCache();
  if (authToken.message === "error") {
    return newToken(data);
  }

  if (Date.now() / 1000 - authToken.time > authToken.expires_in - 60) {
    return newToken(data);
  } else {
    return authToken.access_token;
  }
}
