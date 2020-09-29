import { stringify } from "querystring";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { req } from "../requestLib/request";

/**
 * @param {any} data Objeto com as informações pra chamar o token
 * @return {Promise<AxiosResponse>} Retorna o response da requisição do token
 */
export async function createToken(data: any): Promise<AxiosResponse> {
  const options: AxiosRequestConfig = {
    method: data.method,
    headers: { ...data.headers },
    data: stringify(data.params),
    url: data.url,
  };

  return req(options);
}
