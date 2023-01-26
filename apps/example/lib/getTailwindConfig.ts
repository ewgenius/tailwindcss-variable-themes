import * as fs from "fs";
import * as path from "path";

export async function getTailwindConfig(name: string) {
  const file = await new Promise<string>((resolve, reject) => {
    fs.readFile(path.resolve(name), "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });

  return file;
}
