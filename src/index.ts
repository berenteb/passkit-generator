import express, { NextFunction } from "express";
import cors from "cors";

import { Router } from "./router";
import { Configuration } from "./utils/configuration";

const app = express();
app.use(cors());
app.use(express.json());

Router(app);

app.use(
  (
    err: string | Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    console.error(err);
    res.statusCode = 400;
    res.send(err.toString());
  }
);
app.listen(Configuration.BACKEND_PORT, () => {
  console.log("Server listening on " + Configuration.BACKEND_PORT);
});
