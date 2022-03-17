import { MongoCrudException } from "../exceptions/MongoCrudException.js";
import { userModel } from "../models/user.js";

/**
 * Delete user function
 * @param userId
 */
export async function deleteUser(userId: string) {
  userModel.findByIdAndRemove(userId).catch((error) => {
    throw new MongoCrudException(error);
  });
}
