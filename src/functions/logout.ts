import { TokenData } from "../types/auth.js";

/**
 * Logout function
 * @returns empty accessToken, refreshToken
 */
export async function logout(): Promise<TokenData> {
  return {
    accessToken: "",
    refreshToken: "",
  };
}
