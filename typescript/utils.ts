import { readFileSync } from "node:fs";

export const getInput = (fileName: string): string => {
  // todo use the filename to read the input and return as a string
  return readFileSync(fileName, "utf-8");
};
