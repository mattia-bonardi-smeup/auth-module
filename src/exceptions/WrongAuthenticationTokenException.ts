import { AuthException } from "./AuthException.js";

export class WrongAuthenticationTokenException extends AuthException {
  constructor() {
    super(401, "Wrong authentication token");
  }
}
