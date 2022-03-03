import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException";
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException";
import userModel from "../models/user";
import { createAccessToken, verifyToken } from "../services/token";
import { TokenData } from "../types/auth";

/**
 * Refresh token function
 * @param refreshToken
 * @returns accessToken, refreshToken
 */
export default async function refreshToken(
  refreshToken: string
): Promise<TokenData> {
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
