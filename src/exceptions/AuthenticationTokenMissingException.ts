import { AuthException } from "./AuthException.js";

export class AuthenticationTokenMissingException extends AuthException {
  constructor() {
    super(401, "Authentication token missing");
  }
}
