/** JWT configuration */
class AuthModuleConfiguration {
  private JWT_SECRET = "fdshkdjhzklhzk";
  private ACCESS_TOKEN_DURATION = 3600; //60 minutes
  private REFRESH_TOKEN_DURATION = 14400; //4 hours

  public setJwtSecret(secret: string) {
    this.JWT_SECRET = secret;
  }

  public getJwtSecret() {
    return this.JWT_SECRET;
  }

  public setJAccessTokenDuration(seconds: number) {
    this.ACCESS_TOKEN_DURATION = seconds;
  }

  public getAccessTokenDuration() {
    return this.ACCESS_TOKEN_DURATION;
  }

  public setRefreshTokenDuration(seconds: number) {
    this.REFRESH_TOKEN_DURATION = seconds;
  }

  public GetRefreshTokenDuration() {
    return this.REFRESH_TOKEN_DURATION;
  }
}

const authModuleConfiguration = new AuthModuleConfiguration();
export default authModuleConfiguration;
