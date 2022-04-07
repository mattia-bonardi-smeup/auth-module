import { IsString } from "class-validator";

/**
 * Google sign in payload
 */
export class GoogleSignInPayload {
  @IsString()
  credential: string;
  @IsString()
  g_csrf_token: string;
}
