class AuthModuleConfiguration {
  /**
   * JWT secret key
   */
  public JWT_SECRET: string = "fdshkdjhzklhzk";
  /**
   * Access token duration (seconds)
   * default: 60 minutes
   */
  public ACCESS_TOKEN_DURATION: number = 3600;
  /**
   * Refresh token duration (seconds)
   * default: 4 hours
   */
  public REFRESH_TOKEN_DURATION: number = 14400; //4 hours
  /**
   * Frontend application url
   */
  public FRONTEND_URL: string;
  /**
   * DEV frontend application url
   */
  public DEV_FRONTEND_URL: string;
}

export const authModuleConfiguration = new AuthModuleConfiguration();
