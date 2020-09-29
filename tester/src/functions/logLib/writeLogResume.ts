import { writeFile } from "fs-extra";

type Status = {
  [key: string]: number;
};

let statusObj: Status;

const httpStatus: Status = {
  "100": 0,
  "101": 0,
  "102": 0,
  "103": 0,
  "200": 0,
  "201": 0,
  "202": 0,
  "203": 0,
  "204": 0,
  "205": 0,
  "206": 0,
  "207": 0,
  "208": 0,
  "226": 0,
  "300": 0,
  "301": 0,
  "302": 0,
  "303": 0,
  "304": 0,
  "305": 0,
  "306": 0,
  "307": 0,
  "308": 0,
  "400": 0,
  "401": 0,
  "402": 0,
  "403": 0,
  "404": 0,
  "405": 0,
  "406": 0,
  "407": 0,
  "408": 0,
  "409": 0,
  "410": 0,
  "411": 0,
  "412": 0,
  "413": 0,
  "414": 0,
  "415": 0,
  "416": 0,
  "417": 0,
  "418": 0,
  "421": 0,
  "422": 0,
  "423": 0,
  "424": 0,
  "425": 0,
  "426": 0,
  "428": 0,
  "429": 0,
  "431": 0,
  "451": 0,
  "500": 0,
  "501": 0,
  "502": 0,
  "503": 0,
  "504": 0,
  "505": 0,
  "506": 0,
  "507": 0,
  "508": 0,
  "510": 0,
  "511": 0,
};

/**
 * @param {Status} status Objeto com a key sendo o status e o value sendo 0 (por padrão terá todos os status)
 * @return {void}
 */
export function defineResume(status = httpStatus): void {
  statusObj = { ...status, "Other status": 0 };
}

/**
 * @param {number} status Status da requisição que foi feita
 * @return {Promise<void>}
 */
export async function logResume(status: number): Promise<void> {
  if (statusObj[status] === undefined) {
    statusObj["Other status"] = statusObj["Other status"] + 1;
  } else {
    statusObj[status] = statusObj[status] + 1;
  }

  await writeFile("log/resume.log", `${JSON.stringify(statusObj, null, "\t")}`);
}
