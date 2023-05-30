import { readFileSync } from "fs";

 export function getJson(location, format) {
  const file = readFileSync(location, format);
  return file;
}
