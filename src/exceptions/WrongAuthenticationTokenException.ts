import HttpException from "./HttpException.js";

class WrongAuthenticationTokenException extends HttpException {
  constructor() {
    super(401, "Wrong authentication token");
  }
}

export default WrongAuthenticationTokenException;
