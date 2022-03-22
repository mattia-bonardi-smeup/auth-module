import { HttpException } from "./HttpException.js";

export class NotEqualPasswordException extends HttpException {
  constructor() {
    super(400, "Passwords aren't equal");
  }
}
