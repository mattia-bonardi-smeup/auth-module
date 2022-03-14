import NotAuthorizedException from "../exceptions/NotAuthorizedException.js";
import WrongCredentialsException from "../exceptions/WrongCredentialsException.js";
import userModel from "../models/user.js";
import { compareCryptString } from "../services/crypt.js";
import { createAccessToken, createRefreshToken } from "../services/token.js";
import { AuthData, TokenData } from "../types/auth.js";
import User from "../types/user.js";

/**
 * Login function
 * @param authData
 * @returns accessToken, refreshToken
 */
export default async function login(authData: AuthData): Promise<TokenData> {
  const user: User = await userModel.findOne({ email: authData.email });
  if (
    user &&
    user.password &&
    compareCryptString(authData.password, user.password) &&
    user.type == authData.type
  ) {
    if (user.isActive && !user.isOauth) {
      return {
        accessToken: "Bearer " + createAccessToken(user.id),
        refreshToken: "Bearer " + createRefreshToken(user.id),
      };
    } else {
      throw new NotAuthorizedException();
    }
  } else {
    throw new WrongCredentialsException();
  }
}
