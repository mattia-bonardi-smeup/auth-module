import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { userModel } from "../models/user.js";
import type { User } from "../types/user.js";

/**
 * Update user function
 * @param user
 */
export async function updateUser(userUpdated: User) {
  userModel.findByIdAndUpdate(userUpdated.id, userUpdated).catch((error) => {
    throw new MongoCrudException(error);
  });
}
