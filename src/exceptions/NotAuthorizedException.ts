import { HttpException } from "./HttpException.js";

export class NotAuthorizedException extends HttpException {
  constructor() {
    super(403, "You're not authorized");
  }
}
