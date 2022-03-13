import User from "../types/user.js";

/**
 * Create empty user function
 * @returns
 */
export default function createUser(): User {
  return {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    isActive: false,
    isOauth: false,
    password: "",
    roles: [],
    type: "",
  };
}
