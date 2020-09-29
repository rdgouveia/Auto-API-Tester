import { createToken } from "./createToken";
import { newLog } from "../logLib/logController";
import { writeToken } from "./writeToken";

/**
 * @param {any} data Parâmetros pra crar um novo token
 * @return {Promise<string>} Retorna o token para ser usado na requisição
 */
export async function newToken(data: any): Promise<string> {
  const newAuthToken = await createToken(data);
  await newLog(newAuthToken, "log/authToken.log");
  await writeToken(newAuthToken.data);
  return newAuthToken.data.access_token;
}
