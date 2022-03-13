import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException.js";
import MongoCrudException from "../exceptions/MongoCrudException.js";
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
export default function authorizeUser(
  accessToken: string,
  ...roles: string[]
): Promise<User> {
  if (accessToken) {
    try {
      const verificationResponse = verifyToken(accessToken.split(" ")[1]);
      userModel
        .findById(verificationResponse.userId)
        .then((user) => {
          // verify that user is active and roles are included
          if (
            user &&
            (roles as string[]).includes(user.role) &&
            user.isActive
          ) {
            // clear password
            user.password = "";
            return user;
          } else {
            throw new WrongAuthenticationTokenException();
          }
        })
        .catch((error) => {
          throw new MongoCrudException(error);
        });
    } catch (error) {
      throw new WrongAuthenticationTokenException();
    }
  } else {
    throw new AuthenticationTokenMissingException();
  }
  return null;
}
