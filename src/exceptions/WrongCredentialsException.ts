import { HttpException } from "./HttpException.js";

export class WrongCredentialsException extends HttpException {
  constructor() {
    super(401, "Wrong credentials provided");
  }
}
