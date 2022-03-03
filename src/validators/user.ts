import { IsBoolean, IsString } from "class-validator";

/**
 * User validator
 */
export default class UserDto {
  @IsString()
  id: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  type: string;

  @IsString()
  role: string;

  @IsBoolean()
  isOauth: boolean;
}
