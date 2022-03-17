import { AuthenticationTokenMissingException } from "../exceptions/AuthenticationTokenMissingException.js";
import { WrongAuthenticationTokenException } from "../exceptions/WrongAuthenticationTokenException.js";
import { userModel } from "../models/user.js";
import { createAccessToken, verifyToken } from "../services/token.js";
import { TokenData } from "../types/auth.js";

/**
 * Refresh token function
 * @param refreshToken
 * @returns accessToken, refreshToken
 */
export async function refreshToken(refreshToken: string): Promise<TokenData> {
  if (refreshToken) {
    try {
      const verificationResponse = verifyToken(refreshToken.split(" ")[1]);
      const userId = verificationResponse.userId;
      const user = await userModel.findById(userId);
      if (user) {
        return {
          accessToken: "Bearer " + createAccessToken(user.id),
          refreshToken: refreshToken,
        };
      } else {
        throw new WrongAuthenticationTokenException();
      }
    } catch (error) {
      throw new WrongAuthenticationTokenException();
    }
  } else {
    throw new AuthenticationTokenMissingException();
  }
}
