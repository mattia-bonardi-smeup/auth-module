import WrongCredentialsException from "../exceptions/WrongCredentialsException";
import userModel from "../models/user";
import { compareCryptString } from "../services/crypt";
import { createAccessToken, createRefreshToken } from "../services/token";
import { AuthData, TokenData } from "../types/auth";

/**
 * Login function
 * @param authData
 * @returns accessToken, refreshToken
 */
export default async function login(authData: AuthData): Promise<TokenData> {
  const user = await userModel.findOne({ email: authData.email });
  if (
    user &&
    user.password &&
    compareCryptString(authData.password, user.password) &&
    user.type === authData.type &&
    user.isOauth === false &&
    user.isActive == true
  ) {
    return {
      accessToken: "Bearer " + createAccessToken(user.id),
      refreshToken: "Bearer " + createRefreshToken(user.id),
    };
  } else {
    throw new WrongCredentialsException();
  }
}
