import HttpException from "./HttpException";

class OperationNotPermittedException extends HttpException {
  constructor() {
    super(403, "You're not authorized to complete this operation");
  }
}

export default OperationNotPermittedException;
