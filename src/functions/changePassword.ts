import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { NotAuthorizedException } from "../exceptions/NotAuthorizedException.js";
import { NotEqualPasswordException } from "../exceptions/NotEqualPasswordsException.js";
import { PasswordRequirementsException } from "../exceptions/PasswordRequirementsException.js";
import { userModel } from "../models/user.js";
import { compareCryptString, cryptString } from "../services/crypt.js";
import { checkPassword } from "../services/password.js";
import type { PasswordData } from "../types/auth.js";
import { User } from "../types/user.js";

/**
 * Confirm sign in function
 * @param userId
 */
export async function changePassword(passwordData: PasswordData) {
  // check old password
  userModel
    .findById(passwordData.userId)
    .then((user: User) => {
      if (
        user &&
        user.password &&
        compareCryptString(passwordData.oldPassword, user.password)
      ) {
        // check that passwords are equals
        if (passwordData.password != passwordData.confirmPassword) {
          throw new NotEqualPasswordException();
        }
        // check the password requirements
        if (!checkPassword(passwordData.password)) {
          throw new PasswordRequirementsException();
        }
        // crypt and change password
        userModel
          .findByIdAndUpdate(passwordData.userId, {
            password: cryptString(passwordData.password),
          })
          .catch((error) => {
            throw new MongoCrudException(error);
          });
      } else {
        throw new NotAuthorizedException();
      }
    })
    .catch((error) => {
      throw new MongoCrudException(error);
    });
}
