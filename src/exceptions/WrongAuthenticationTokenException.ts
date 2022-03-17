import { HttpException } from "./HttpException.js";

export class WrongAuthenticationTokenException extends HttpException {
  constructor() {
    super(401, "Wrong authentication token");
  }
}
