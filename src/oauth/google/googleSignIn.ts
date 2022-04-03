import { userModel } from "../../models/user.js";
import { createAccessToken, createRefreshToken } from "../../services/token.js";
import { User } from "../../types/user.js";
import { createUserFromToken } from "./createUserFromToken.js";
import { GoogleTokenMissingException } from "./exceptions/GoogleTokenMissingException.js";
import { verifyGoogleToken } from "./verifyGoogleToken.js";

/**
 * Google sign in function
 * - verify token
 * - getting google user from token
 * - create user or login
 * @param googleToken
 */
export async function googleSignIn(
  googleToken: string,
  userType: string,
  userRoles: string[]
) {
  if (googleToken) {
    try {
      // verify token
      await verifyGoogleToken(googleToken);
      // getting google user data
      const googleUser: User = await createUserFromToken(
        googleToken,
        userType,
        userRoles
      );
      // getting user from database
      const user = await userModel.findOne({
        email: googleUser.email,
      });
      let userId = null;
      if (user) {
        // login
        userId = user.id;
      } else {
        // Create user into users
        const userCreated = await userModel.create(googleUser);
        userId = userCreated.id;
      }
      // create authorization tokens
      return {
        accessToken: "Bearer " + createAccessToken(userId),
        refreshToken: "Bearer " + createRefreshToken(userId),
      };
    } catch (error) {
      throw error;
    }
  } else {
    throw new GoogleTokenMissingException();
  }
}
