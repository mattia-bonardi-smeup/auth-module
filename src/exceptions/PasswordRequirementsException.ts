import { HttpException } from "./HttpException.js";

export class PasswordRequirementsException extends HttpException {
  constructor() {
    super(400, "Password does'ot meet requirements");
  }
}
