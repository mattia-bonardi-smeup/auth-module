import jwt from "jsonwebtoken";
import authModuleConfiguration from "../configurations/AuthModuleConfiguration.js";
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException.js";
import { SessionData } from "../types/auth.js";

/**
 * Create JWT access token
 * @param userId
 * @returns
 */
export const createAccessToken = (userId: string) => {
  const expiresIn = authModuleConfiguration.getAccessTokenDuration();
  const dataStoredInToken: SessionData = {
    userId: userId,
    tokenType: "ACCESS_TOKEN",
  };
  return jwt.sign(dataStoredInToken, authModuleConfiguration.getJwtSecret(), {
    expiresIn,
  });
};

/**
 * Create JWT refresh token
 * @param userId
 * @returns
 */
export const createRefreshToken = (userId: string) => {
  const expiresIn = authModuleConfiguration.GetRefreshTokenDuration();
  const dataStoredInToken: SessionData = {
    userId: userId,
    tokenType: "REFRESH_TOKEN",
  };
  return jwt.sign(dataStoredInToken, authModuleConfiguration.getJwtSecret(), {
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
    return jwt.verify(
      token,
      authModuleConfiguration.getJwtSecret()
    ) as SessionData;
  } catch (error) {
    throw new WrongAuthenticationTokenException();
  }
};
