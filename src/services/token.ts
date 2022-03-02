import * as jwt from "jsonwebtoken";
import configuration from "../configurations/configuration";
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException";
import { SessionData } from "../types/auth";

/**
 * Create JWT access token
 * @param userId
 * @returns
 */
export const createAccessToken = (userId: string) => {
  const expiresIn = configuration.getAccessTokenDuration();
  const dataStoredInToken: SessionData = {
    userId: userId,
    tokenType: "ACCESS_TOKEN",
  };
  return jwt.sign(dataStoredInToken, configuration.getJwtSecret(), {
    expiresIn,
  });
};

/**
 * Create JWT refresh token
 * @param userId
 * @returns
 */
export const createRefreshToken = (userId: string) => {
  const expiresIn = configuration.GetRefreshTokenDuration();
  const dataStoredInToken: SessionData = {
    userId: userId,
    tokenType: "REFRESH_TOKEN",
  };
  return jwt.sign(dataStoredInToken, configuration.getJwtSecret(), {
    expiresIn,
  });
};

/**
 * Verify JWT token
 * @param token
 * @returns
 */
export const verifyToken = (token: string): SessionData => {
  try {
    return jwt.verify(token, configuration.getJwtSecret()) as SessionData;
  } catch (error) {
    throw new WrongAuthenticationTokenException();
  }
};
