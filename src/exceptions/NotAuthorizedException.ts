import { AuthException } from "./AuthException.js";

export class NotAuthorizedException extends AuthException {
  constructor() {
    super(403, "You're not authorized");
  }
}
