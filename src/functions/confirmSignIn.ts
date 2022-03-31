import { AuthenticationTokenMissingException } from "../exceptions/AuthenticationTokenMissingException.js";
import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { WrongAuthenticationTokenException } from "../exceptions/WrongAuthenticationTokenException.js";
import { userModel } from "../models/user.js";
import { verifyToken } from "../services/token.js";

/**
 * Confirm sign in function
 * @param userId
 */
export async function confirmSignIn(token: string) {
  if (token) {
    try {
      const verificationResponse = verifyToken(token.split(" ")[1]);
      const user = await userModel.findById(verificationResponse.userId);
      if (user) {
        userModel
          .findByIdAndUpdate(user.id, {
            isActive: true,
          })
          .catch((error) => {
            throw new MongoCrudException(error);
          });
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
