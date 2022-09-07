require("dotenv").config();

export const Configuration = {
  BACKEND_PORT: process.env.BACKEND_PORT,
  PASS_TYPE_IDENTIFIER: process.env.PASS_TYPE_IDENTIFIER,
  ORG_NAME: process.env.ORG_NAME,
  TEAM_ID: process.env.TEAM_ID,
};
