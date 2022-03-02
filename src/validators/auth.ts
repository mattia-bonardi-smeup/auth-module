import { IsString } from "class-validator";

/**
 * Auth data validator
 */
export class AuthDataDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  type: string;
}
