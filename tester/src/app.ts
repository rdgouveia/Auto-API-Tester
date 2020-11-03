/**
 * @author Rafael de Gouveia <rafa.degouveia@gmail.com>
 */
import { readJSON } from "fs-extra";
import { getToken } from "./functions/tokenLib/tokenController";
import { scheduleJob, RecurrenceSpecDateRange } from "node-schedule";
import { newReq } from "./functions/requestLib/requestController";
import { createDir } from "./functions/utils/createDir";
import { JobConfig, formatInput } from "./functions/utils/formatInput";

/**
 * @param {JobConfig} jobConfig Configurações para iniciar os testes
 * @return {Promise<void>}
 */
export default async (jobConfig: JobConfig): Promise<void> => {
  const { token, rule, time, concurrency } = formatInput(jobConfig);
  await createDir();
  const rules: RecurrenceSpecDateRange = {
    start: Date.now(),
    end: Date.now() + time * 60 * 1000,
    rule: `*/${rule} * * * * *`,
  };

  const fn = () => {
    const j = scheduleJob(rules, async () => {
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

  Array.from({ length: concurrency }).map(fn);
};
