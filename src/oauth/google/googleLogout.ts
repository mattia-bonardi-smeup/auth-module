import { MongoCrudException } from "../../exceptions/MongoCrudException.js";
import { NotEqualPasswordException } from "../../exceptions/NotEqualPasswordsException.js";
import { PasswordRequirementsException } from "../../exceptions/PasswordRequirementsException.js";
import { userModel } from "../../models/user.js";
import { cryptString } from "../../services/crypt.js";
import { checkPassword } from "../../services/password.js";

/**
 * Google logout function
 * - verify passwords
 * - update user
 * @param userId
 * @param password
 * @param confirmedPassword
 */
export async function googleLogout(
  userId: string,
  password: string,
  confirmedPassword: string
) {
  // check that passwords are equals
  if (password != confirmedPassword) {
    throw new NotEqualPasswordException();
  }
  // check the password requirements
  if (!checkPassword(password)) {
    throw new PasswordRequirementsException();
  }
  // set password and change isOauth flag
  userModel
    .findByIdAndUpdate(userId, {
      isOauth: false,
      password: cryptString(password),
    })
    .catch((error) => {
      throw new MongoCrudException(error);
    });
}
