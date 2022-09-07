import fs from "fs";
import path from "path";

export function loadCerts() {
  return {
    wwdr: fs.readFileSync(path.resolve(__dirname, "../certs/wwdr.pem")),
    signerCert: fs.readFileSync(
      path.resolve(__dirname, "../certs/signerCert.pem")
    ),
    signerKey: fs.readFileSync(
      path.resolve(__dirname, "../certs/signerKey.pem")
    ),
    signerKeyPassphrase: "passtest",
  };
}
