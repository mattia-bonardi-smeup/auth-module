import { AuthException } from "./AuthException.js";

export class OperationNotPermittedException extends AuthException {
  constructor() {
    super(403, "You're not authorized to complete this operation");
  }
}
