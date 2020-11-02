import { AxiosRequestConfig } from "axios";
import { newLog } from "../logLib/logController";
import { getRandomNumber } from "./randomNumber";
import { req } from "./request";

/**
 * @param {any} data Dados salvos no arquivo data.json
 * @param {string | null} auth Token que retorna da requisição do token
 * @return {Promise<void>}
 */
export async function newReq(data: any, auth: string | null): Promise<void> {
  if (!!data.params) {
    if (data.api.method === "GET") {
      data.api = {
        ...data.api,
        params: data.params[getRandomNumber(data.params.length)],
      };
    } else {
      data.api = {
        ...data.api,
        data: data.params[getRandomNumber(data.params.length)],
      };
    }
  }

  if (auth !== null) {
    data.api.headers = { ...data.api.headers, authorization: `Bearer ${auth}` };
  }

  const response = await req(data.api as AxiosRequestConfig);
  await newLog(response, "log/api.log");
}
