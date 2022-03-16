import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException.js";
import OperationNotPermittedException from "../exceptions/OperationNotPermittedException.js";
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException.js";
import userModel from "../models/user.js";
import { verifyToken } from "../services/token.js";
import User from "../types/user.js";

/**
 * Authorize user function
 * @param accessToken
 * @param roles
 * @returns user
 */
export default async function authorizeUser(
  accessToken: string,
  ...roles: string[]
): Promise<User> {
  if (accessToken) {
    try {
      const verificationResponse = verifyToken(accessToken.split(" ")[1]);
      const user = await userModel.findById(verificationResponse.userId);
      // verify that user is active
      if (user && user.isActive == true) {
        // verify user roles
        const filter = roles.filter((element) => user.roles.includes(element));
        if (filter.length > 0) {
          // clear password
          user.password = "";
          return user;
        } else {
          throw new OperationNotPermittedException();
        }
      } else {
        throw new WrongAuthenticationTokenException();
      }
    } catch (error) {
      throw error;
    }
  } else {
    throw new AuthenticationTokenMissingException();
  }
}
