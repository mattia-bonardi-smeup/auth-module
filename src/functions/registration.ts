import { sendEmail, TemplateVariables } from "@iterout/email-sender-module";
import { EmailSenderException } from "@iterout/email-sender-module/dist/exceptions/EmailSenderException";
import mongoose from "mongoose";
import { authModuleConfiguration } from "../configurations/AuthModuleConfiguration.js";
import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { UserWithThatEmailAlreadyExistsException } from "../exceptions/UserWithThatEmailAlreadyExistsException.js";
import { userModel } from "../models/user.js";
import { cryptString } from "../services/crypt.js";
import type { User } from "../types/user.js";

/**
 * Registration function
 * @param user
 */
export async function registration(user: User) {
  try {
    // check that user already exist
    if (await userModel.findOne({ email: user.email })) {
      throw new UserWithThatEmailAlreadyExistsException(user.email);
    }
    // create new user
    const userCreated: User = await userModel.create({
      ...user,
      password: cryptString(user.password),
      isActive: false,
    });
    // send confirm registration email
    const variables: TemplateVariables = {
      firstName: userCreated.firstName,
      link:
        process.env.NODE_ENV == "production"
          ? `${authModuleConfiguration.FRONTEND_URL}/confirmSignIn`
          : `${authModuleConfiguration.DEV_FRONTEND_URL}/confirmSignIn`,
    };
    await sendEmail(
      authModuleConfiguration.AUTH_EMAIL_CONFIG,
      userCreated.email,
      "Welcome to Iterout, confirm your registration",
      "confirmRegistration",
      variables
    );
  } catch (error) {
    if (error instanceof EmailSenderException) {
      throw error;
    } else {
      throw new MongoCrudException(error);
    }
  }
}
