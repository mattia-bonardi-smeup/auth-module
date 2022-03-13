import MongoCrudException from "../exceptions/MongoCrudException.js";
import userModel from "../models/user.js";

/**
 * Confirm sign in function
 * @param userId
 */
export default async function confirmSignIn(userId: string) {
  userModel
    .findByIdAndUpdate(userId, {
      isActive: true,
    })
    .catch((error) => {
      throw new MongoCrudException(error);
    });
}
