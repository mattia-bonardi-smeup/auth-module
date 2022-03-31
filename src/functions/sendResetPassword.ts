import { sendEmail, TemplateVariables } from "@iterout/email-sender-module";
import { authModuleConfiguration } from "../configurations/AuthModuleConfiguration.js";
import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { userModel } from "../models/user.js";
import { createGenericToken } from "../services/token.js";
import type { User } from "../types/user.js";

/**
 * Send reset password link function
 * @param email
 * @returns user
 */
export async function sendResetPassword(email: string) {
  if (email) {
    // get user from email
    userModel
      .findOne({ email: email })
      .then((user: User) => {
        // send confirm registration email
        const variables: TemplateVariables = {
          firstName: user.firstName,
          link: `${
            authModuleConfiguration.FRONTEND_URL
          }/resetPassword?t=${createGenericToken(user.id, 1200)}`,
        };
        sendEmail(
          authModuleConfiguration.AUTH_EMAIL_CONFIG,
          email,
          "Reset your password",
          "resetPassword",
          variables
        );
      })
      .catch((error) => {
        throw new MongoCrudException(error);
      });
  }
}
