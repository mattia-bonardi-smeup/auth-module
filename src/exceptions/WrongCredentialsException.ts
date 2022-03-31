import { AuthException } from "./AuthException.js";

export class WrongCredentialsException extends AuthException {
  constructor() {
    super(401, "Wrong credentials provided");
  }
}
