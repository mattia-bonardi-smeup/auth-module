import { AuthException } from "./AuthException.js";

export class PasswordRequirementsException extends AuthException {
  constructor() {
    super(400, "Password does'ot meet requirements");
  }
}
