//import { getJson } from "./json.mjs";
import { readFileSync } from "fs";

export async function getData() {
  const file = readFileSync("./movies.json", "utf-8");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(file));
    });
  }, 1000);
}

