import { AuthException } from "./AuthException.js";

export class UserWithThatEmailAlreadyExistsException extends AuthException {
  constructor(email: string) {
    super(400, `User with email ${email} already exists`);
  }
}
