/**
 * Auth data
 */
export interface AuthData {
  email: string;
  password: string;
  type: string;
}

/**
 * TokenData
 */
export interface TokenData {
  accessToken: string;
  refreshToken: string;
}

/**
 * Session data
 */
export interface SessionData {
  userId: string;
  tokenType: string;
}
