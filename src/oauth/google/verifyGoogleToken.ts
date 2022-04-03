import { OAuth2Client } from "google-auth-library";
import { authModuleConfiguration } from "../../configurations/AuthModuleConfiguration.js";
import { GoogleTokenNotValidException } from "./exceptions/GoogleTokenNotValidException.js";

/**
 * Verify google token usign google auth library
 * @param token
 * @returns
 */
export const verifyGoogleToken = async (token: string) => {
  try {
    const client = new OAuth2Client(authModuleConfiguration.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: authModuleConfiguration.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) {
      throw new GoogleTokenNotValidException();
    }
  } catch (error) {
    throw new GoogleTokenNotValidException(error);
  }
};
