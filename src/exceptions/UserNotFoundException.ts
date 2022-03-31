import { AuthException } from "./AuthException.js";

export class UserNotFoundException extends AuthException {
  constructor(id: string) {
    super(404, `User with id ${id} not found`);
  }
}
