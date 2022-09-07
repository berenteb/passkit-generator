import express from "express";
import fs from "fs";
import path from "path";
import { LocalsDto } from "../utils/types";

export default function apiMW() {
  return async function (
    req: express.Request,
    res: express.Response<unknown, LocalsDto>,
    next: express.NextFunction
  ) {
    const passPath = res.locals.passPath;
    console.log("\nPath", req.originalUrl);
    console.log("PassPath", passPath);

    if (!passPath) return next("No data found!");

    if (fs.existsSync(path.resolve(passPath))) {
      res.download(passPath, () => {
        fs.rmSync(passPath);
      });
    } else {
      return next("Does not exist!");
    }
  };
}
