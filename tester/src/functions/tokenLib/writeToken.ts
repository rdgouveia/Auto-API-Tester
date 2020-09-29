import { AxiosResponse } from "axios";
import { writeJSON } from "fs-extra";

/**
 * @param {AxiosResponse} token Response da chamada da API de token
 * @return {Promise<void>}
 */
export async function writeToken(token: AxiosResponse): Promise<void> {
  await writeJSON("token/authToken.json", {
    ...token,
    time: Date.now() / 1000,
  });
}
