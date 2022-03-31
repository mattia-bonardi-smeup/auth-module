import { AuthException } from "./AuthException.js";

export class NotEqualPasswordException extends AuthException {
  constructor() {
    super(400, "Passwords aren't equal");
  }
}
