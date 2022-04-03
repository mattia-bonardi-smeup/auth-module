import axios from "axios";
import { User } from "../../types/user.js";
import { createEmptyUser } from "../../utils/utils.js";
import { GoogleConnectionException } from "./exceptions/GoogleConnectionException.js";

/**
 * Call oauth2 google server to return google user information
 * @param token
 * @returns
 */
export const createUserFromToken = async (
  token: string,
  userType: string,
  userRoles: string[]
): Promise<User> => {
  try {
    const googleUser = await axios.get(
      "https://oauth2.googleapis.com/tokeninfo?id_token=" + token
    );
    if (googleUser) {
      const user: User = createEmptyUser();
      user.email = googleUser.data.email;
      user.firstName = googleUser.data.given_name;
      user.lastName = googleUser.data.family_name;
      user.type = userType;
      user.roles = userRoles;
      user.isOauth = true;
      user.isActive = true;
      user.password = "";
      user.picture = googleUser.data.profilePicture;
      return user;
    }
  } catch (error) {
    throw new GoogleConnectionException(error);
  }
};
