import MongoCrudException from "../exceptions/MongoCrudException.js";
import UserWithThatEmailAlreadyExistsException from "../exceptions/UserWithThatEmailAlreadyExistsException.js";
import userModel from "../models/user.js";
import { cryptString } from "../services/crypt.js";
import User from "../types/user.js";

/**
 * Registration function
 * @param user
 */
export default async function registration(user: User) {
  try {
    // check that user already exist
    if (await userModel.findOne({ email: user.email })) {
      throw new UserWithThatEmailAlreadyExistsException(user.email);
    }
    // create new user
    const createdUser: User = await userModel.create({
      ...user,
      password: cryptString(user.password),
      isActive: false,
    });
    // create user record into Customers or Business
    if (createdUser) {
    }
  } catch (error) {
    throw new MongoCrudException(error);
  }
}
