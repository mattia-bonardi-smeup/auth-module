import { EmailConfig } from "@iterout/email-sender-module";
import { JwtParameters } from "../types/auth.js";
import { authModuleConfiguration } from "./AuthModuleConfiguration.js";

/**
 * Configure email sender from auth module
 * @param sender
 * @param password
 * @param service
 * @param emailTemplate
 */
export function configureAuth(
  authEmailConfig: EmailConfig,
  frontendUrl: string,
  devFrontEndUrl: string = "http://localhost:3000",
  jwtSecret: string = "fdshkdjhzklhzk",
  jwtAccessTokenDuration: number = 3600,
  jwtRefreshTokenDuration: number = 14400
) {
  authModuleConfiguration.FRONTEND_URL = frontendUrl;
  authModuleConfiguration.DEV_FRONTEND_URL = devFrontEndUrl;
  authModuleConfiguration.AUTH_EMAIL_CONFIG = authEmailConfig;
  authModuleConfiguration.JWT_SECRET = jwtSecret;
  authModuleConfiguration.ACCESS_TOKEN_DURATION = jwtAccessTokenDuration;
  authModuleConfiguration.REFRESH_TOKEN_DURATION = jwtRefreshTokenDuration;
}
