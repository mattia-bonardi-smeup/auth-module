import { sendEmail, TemplateVariables } from "@iterout/email-sender-module";
import { authModuleConfiguration } from "../configurations/AuthModuleConfiguration.js";
import { AuthenticationTokenMissingException } from "../exceptions/AuthenticationTokenMissingException.js";
import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { NotEqualPasswordException } from "../exceptions/NotEqualPasswordsException.js";
import { PasswordRequirementsException } from "../exceptions/PasswordRequirementsException.js";
import { WrongAuthenticationTokenException } from "../exceptions/WrongAuthenticationTokenException.js";
import { userModel } from "../models/user.js";
import { cryptString } from "../services/crypt.js";
import { checkPassword } from "../services/password.js";
import { verifyToken } from "../services/token.js";
import { User } from "../types/user.js";

/**
 * Reset password function
 * @param token
 * @param password
 * @param confirmedPassword
 */
export async function confirmSignIn(
  token: string,
  password: string,
  confirmedPassword: string
) {
  if (token) {
    try {
      const verificationResponse = verifyToken(token.split(" ")[1]);
      userModel
        .findById(verificationResponse.userId)
        .then((user: User) => {
          // check that passwords are equals
          if (password != confirmedPassword) {
            throw new NotEqualPasswordException();
          }
          // check the password requirements
          if (!checkPassword(password)) {
            throw new PasswordRequirementsException();
          }
          // crypt and change password
          userModel
            .findByIdAndUpdate(user.id, {
              password: cryptString(password),
            })
            .then(() => {
              // send change password notification
              const variables: TemplateVariables = {
                firstName: user.firstName,
              };
              sendEmail(
                authModuleConfiguration.AUTH_EMAIL_CONFIG,
                user.email,
                "Password changed successfully",
                "changePassword",
                variables
              );
            })
            .catch((error) => {
              throw new MongoCrudException(error);
            });
        })
        .catch((error) => {
          throw new MongoCrudException(error);
        });
    } catch (error) {
      throw error;
    }
  } else {
    throw new AuthenticationTokenMissingException();
  }
}
