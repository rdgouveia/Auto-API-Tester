import fs from "fs-extra";
import { Body } from "./logController";

/**
 * @param {string} file Nome do arquivo que será escrito o log.
 * @param {Body} body Objeto que será escrito no log.
 * @return {Promise<void>}
 */
export async function appendFile(file: string, body: Body): Promise<void> {
  await fs.appendFile(file, `${JSON.stringify(body, null, "\t")}\n\n\n`);
}
