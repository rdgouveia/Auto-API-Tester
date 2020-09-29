import { mkdir, access } from "fs-extra";

export const createDir = async (): Promise<void> => {
  try {
    await access("token");
  } catch (e) {
    await mkdir("token");
  }

  try {
    await access("log");
  } catch (e) {
    await mkdir("log");
  }
};
