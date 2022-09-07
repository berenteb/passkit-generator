import { Configuration } from "./configuration";
import { Template } from "./types";

export function getPassProps(template: Template, userId: string) {
  return {
    passTypeIdentifier: Configuration.PASS_TYPE_IDENTIFIER,
    teamIdentifier: Configuration.TEAM_ID,
    organizationName: Configuration.ORG_NAME,
    description: template.name,
    logoText: template.name,
    foregroundColor: template.foregroundColor,
    labelColor: template.labelColor,
    backgroundColor: template.backgroundColor,
    serialNumber: userId,
  };
}
