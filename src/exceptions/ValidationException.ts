import HttpException from "./HttpException.js";

class ValidationException extends HttpException {
  constructor(messages: string) {
    super(400, "Request validation exception: " + messages);
  }
}

export default ValidationException;
