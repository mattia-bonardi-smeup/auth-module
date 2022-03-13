import { TokenData } from "../types/auth.js";

/**
 * Logout function
 * @returns empty accessToken, refreshToken
 */
export default async function logout(): Promise<TokenData> {
  return {
    accessToken: "",
    refreshToken: "",
  };
}
