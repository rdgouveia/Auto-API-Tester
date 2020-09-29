import { AxiosRequestConfig, AxiosResponse } from "axios";
import { appendFile } from "./writeLog";
import { logResume } from "./writeLogResume";

export type Body = {
  time: string;
  reqParams: AxiosRequestConfig;
  res: {};
  status: number;
};

/**
 * @param {AxiosResponse} data Response da chamada do serviço
 * @param {string} path Caminho onde será salvo o log
 * @return {Promise<void>}
 */
export async function newLog(data: AxiosResponse, path: string): Promise<void> {
  const logBody: Body = {
    time: data.headers.date,
    reqParams: data.config,
    status: data.status,
    res: data.data,
  };

  await appendFile(path, logBody);
  if (path !== "log/authToken.log") {
    await logResume(data.status);
  }
}
