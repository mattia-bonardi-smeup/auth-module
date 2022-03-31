import { IsEmail, IsString } from "class-validator";

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

/**
 * Id dto validator
 */
export class IdDto {
  @IsString()
  id: string;
}

/**
 * Change password validator
 */
export class ChangePasswordDto {
  @IsString()
  oldPassword: string;
  @IsString()
  password: string;
  @IsString()
  confirmedPassword: string;
}

/**
 * Reset password validator
 */
export class ResetPasswordDto {
  @IsString()
  password: string;
  @IsString()
  confirmedPassword: string;
}

/**
 * Email validator
 */
export class EmailDto {
  @IsEmail()
  email: string;
}
