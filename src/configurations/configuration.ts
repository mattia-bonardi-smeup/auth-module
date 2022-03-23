import {
  configureEmailSenderModule,
  createEmailTransporter,
  EmailServices,
} from "@iterout/email-sender-module";
import { JwtParameters } from "../types/auth.js";
import { authModuleConfiguration } from "./AuthModuleConfiguration.js";

/**
 * Configure email sender from auth module
 * @param sender
 * @param password
 * @param service
 * @param emailTemplate
 */
export function configureAuthEmailSender(
  sender: string,
  password: string,
  service: EmailServices,
  frontendUrl: string,
  devFrontEndUrl: string,
  emailTemplateDir?: string
) {
  const tranporter = createEmailTransporter(sender, password, service);
  configureEmailSenderModule(emailTemplateDir, [tranporter]);
  authModuleConfiguration.FRONTEND_URL = frontendUrl;
  authModuleConfiguration.DEV_FRONTEND_URL = devFrontEndUrl;
}

/**
 * Jwt configuration
 * @param jwtParameters
 */
export function configureJwt(jwtParameters: JwtParameters) {
  if (jwtParameters.secret) {
    authModuleConfiguration.JWT_SECRET = jwtParameters.secret;
  }
  if (jwtParameters.accessTokenDuration) {
    authModuleConfiguration.ACCESS_TOKEN_DURATION =
      jwtParameters.accessTokenDuration;
  }
  if (jwtParameters.refreshTokenDuration) {
    authModuleConfiguration.REFRESH_TOKEN_DURATION =
      jwtParameters.refreshTokenDuration;
  }
}
