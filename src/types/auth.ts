/**
 * Auth data
 */
export type AuthData = {
  email: string;
  password: string;
  type: string;
};

/**
 * TokenData
 */
export type TokenData = {
  accessToken: string;
  refreshToken: string;
};

/**
 * Session data
 */
export type SessionData = {
  userId: string;
  tokenType: string;
};
