import { HttpException } from "./HttpException.js";

export class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(401, "Authentication token missing");
  }
}
