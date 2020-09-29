import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { unlink } from "fs-extra";

/**
 * @param {AxiosRequestConfig} options Objeto pronto pra ser utilizado na requisição
 * @return {Promise<AxiosResponse>} Retorna o response da requisição
 */
export async function req(options: AxiosRequestConfig): Promise<AxiosResponse> {
  let response;
  try {
    response = await axios(options);
  } catch (e) {
    console.log(e.response);
    if (e.response.status === 401) {
      unlink("token/authToken.json");
    }

    response = e.response;
  }

  return response;
}
