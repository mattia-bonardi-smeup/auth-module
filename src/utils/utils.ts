import type { User } from "../types/user.js";

/**
 * Create empty user function
 * @returns
 */
export function createEmptyUser(): User {
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
    address: {
      street: "",
      cap: 0,
      city: "",
      country: "",
    },
    phone: {
      prefix: "",
      number: "",
      isValid: false,
    },
    picture: "",
  };
}
