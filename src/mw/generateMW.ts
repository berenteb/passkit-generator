import express from "express";
import fs from "fs";
import path from "path";
import { PKPass } from "passkit-generator";

import generateRandomString from "../utils/randomString";
import { LocalsDto, Template } from "../utils/types";
import { loadCerts } from "../utils/loadCerts";
import { getPassProps } from "../utils/getPassProps";

const templates = require("../../templates.json") as Template[] | undefined;

export default function generateMW() {
  return async function (
    req: express.Request,
    res: express.Response<unknown, LocalsDto>,
    next: express.NextFunction
  ) {
    const { name, userId, templateId } = res.locals;
    const template = templates?.find((i) => i.id === templateId);

    if (!template) return next("Bad query!");
    for (let key of Object.keys(template)) {
      if (!template[key as keyof Template]) return next("Bad config!");
    }

    const pass = new PKPass({}, loadCerts(), getPassProps(template, userId));

    pass.type = "generic";

    pass.primaryFields.push({
      key: "name",
      label: "Név",
      value: name,
    });

    pass.setBarcodes({
      message: userId,
      format: "PKBarcodeFormatQR",
    });

    pass.addBuffer(
      "logo.png",
      fs.readFileSync(
        path.resolve(__dirname, "../resources", templateId, "logo.png")
      )
    );
    pass.addBuffer(
      "icon.png",
      fs.readFileSync(
        path.resolve(__dirname, "../resources", templateId, "icon.png")
      )
    );
    // Save file temporarily and pass over the path
    const identifier = generateRandomString();
    const passPath = path.resolve(__dirname, `../gen/${identifier}.pkpass`);
    fs.createWriteStream(passPath).write(pass.getAsBuffer(), (err) => {
      if (err) {
        return next("Write error!");
      } else {
        res.locals.passPath = passPath;
        return next();
      }
    });
  };
}
