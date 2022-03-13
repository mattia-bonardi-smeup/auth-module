import HttpException from "./HttpException.js";

class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(401, "Authentication token missing");
  }
}

export default AuthenticationTokenMissingException;
