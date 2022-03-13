import HttpException from "./HttpException.js";

class ValidationException extends HttpException {
  constructor(error: any) {
    super(400, "Validation exception: " + error);
  }
}

export default ValidationException;
