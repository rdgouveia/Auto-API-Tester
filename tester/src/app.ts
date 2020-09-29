/**
 * @author Rafael de Gouveia
 */
import { readJSON } from "fs-extra";
import { getToken } from "./functions/tokenLib/tokenController";
import { scheduleJob } from "node-schedule";
import { newReq } from "./functions/requestLib/requestController";
import { createDir } from "./functions/utils/createDir";

/**
 * @param {number} interval Intervalo de tempo que será executado o evento que fará a requisição e salvará o log (por padrão é 1)
 * @param {boolean} token Indica se será necessário fazer uma chamada para autenticar a API que será testada (por padrão é false).
 * @return {Promise<void>}
 */
export const initTest = async (interval = 1, token = false): Promise<void> => {
  await createDir();
  const j = scheduleJob(`*/${interval} * * * * *`, async () => {
    const data = await readJSON("data.json");
    if (token && !!data.auth) {
      await newReq(data, await getToken(data.auth));
    } else if (!token) {
      await newReq(data, null);
    } else {
      console.error(
        "If is necessary a token flow, 'auth' must exist in 'data.json'"
      );
      j.cancel();
    }
  });
};
