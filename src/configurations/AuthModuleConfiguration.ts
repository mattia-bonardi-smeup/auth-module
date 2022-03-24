import { EmailConfig } from "@iterout/email-sender-module";

class AuthModuleConfiguration {
  /**
   * JWT secret key
   */
  public JWT_SECRET: string;
  /**
   * Access token duration (seconds)
   * default: 60 minutes
   */
  public ACCESS_TOKEN_DURATION: number;
  /**
   * Refresh token duration (seconds)
   * default: 4 hours
   */
  public REFRESH_TOKEN_DURATION: number; //4 hours
  /**
   * Frontend application url
   */
  public FRONTEND_URL: string;
  /**
   * DEV frontend application url
   */
  public DEV_FRONTEND_URL: string;
  /**
   * Email config
   */
  public AUTH_EMAIL_CONFIG: EmailConfig;
}

export const authModuleConfiguration = new AuthModuleConfiguration();
