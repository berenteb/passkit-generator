import express from "express";

import { LocalsDto, Template } from "../utils/types";

const templates = require("../../templates.json") as Template[] | undefined;

export default function parseMW() {
  return async function (
    req: express.Request,
    res: express.Response<undefined, LocalsDto>,
    next: express.NextFunction
  ) {
    const name = req.query.name as string;
    const userId = req.query.userId as string;
    const templateId = req.params.templateId as string;
    if (
      !name ||
      !userId ||
      !templateId ||
      !templates?.find((i) => i.id === templateId)
    )
      return next("Bad query!");
    res.locals = { name, userId, templateId };
    return next();
  };
}
