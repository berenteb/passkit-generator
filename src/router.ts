import { Express } from "express";

import apiMW from "./mw/apiMW";
import generateMW from "./mw/generateMW";
import parseMW from "./mw/parseMW";

export function Router(app: Express) {
  app.get("/generate/:templateId", parseMW(), generateMW(), apiMW());
}
