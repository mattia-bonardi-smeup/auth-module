import MongoCrudException from "../exceptions/MongoCrudException";
import UserWithThatEmailAlreadyExistsException from "../exceptions/UserWithThatEmailAlreadyExistsException";
import userModel from "../models/user";
import { cryptString } from "../services/crypt";
import User from "../types/user";

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
