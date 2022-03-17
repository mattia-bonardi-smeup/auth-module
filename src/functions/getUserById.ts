import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { UserNotFoundException } from "../exceptions/UserNotFoundException.js";
import { userModel } from "../models/user.js";
import type { User } from "../types/user.js";

/**
 * Get user by id
 * @param userId
 */
export async function getUserById(userId: string): Promise<User> {
  userModel
    .findById(userId)
    .then((user: User) => {
      if (user) {
        user.password = "";
        return user;
      } else {
        throw new UserNotFoundException(userId);
      }
    })
    .catch((error) => {
      throw new MongoCrudException(error);
    });
  return;
}
