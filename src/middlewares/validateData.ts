import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import ValidationException from "../exceptions/ValidationException.js";

export default function validateData(body: any, type: any) {
  validate(plainToClass(type, body), { skipMissingProperties: false }).then(
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
