# Kir-Dev PassKit Generator

Configurable Apple Wallet Pass generator for events.

## Configuration

1. Signing:
Add `signerCert.pem`, `signerKey.pem` and `wwdr.pem` files to the `certs` directory! These files can be obtained by following these instructions: https://github.com/alexandercerutti/passkit-generator/wiki/Generating-Certificates
2. Add a `.env` based on `.env.example`, `PASS_TYPE_IDENTIFIER` and `TEAM_ID`, these can be obtained from the Apple Developer portal!

3. Create templates in the `templates.json` file based on `templates.example.json`!
3. Put an `icon.png` and a `logo.png` image into the `resources/templateId` folder where templateId is the id you have just defined in the template config file!

**Important: the colors must be in the rgb format (as in the example config), the icon.png image should not exceed the 29x29px size, and the logo.png is recommended to be around 150x150px!**

## Usage
Run `yarn install` to install packages!

Run `yarn start` to run the server!

Create a GET request (i.e. in your browser) for `http://<host>:<port>/generate/<templateId>?name=<name>&userId=<userId>`.
I.e.: http://localhost:3001/generate/event?name=My%20Name&userId=1234

