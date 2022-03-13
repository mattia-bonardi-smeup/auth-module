import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import ValidationException from "../exceptions/ValidationException";

export default function validateBody<T>(
  body: any,
  type: any,
  skipMissingProperties = false
) {
  validate(plainToClass(type, body), { skipMissingProperties }).then(
    (errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors
          .map((error: ValidationError) => Object.values(error.constraints))
          .join(", ");
        throw new ValidationException(message);
      }
    }
  );
}
