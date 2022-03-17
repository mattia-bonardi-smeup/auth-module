import { HttpException } from "./HttpException.js";

export class OperationNotPermittedException extends HttpException {
  constructor() {
    super(403, "You're not authorized to complete this operation");
  }
}
