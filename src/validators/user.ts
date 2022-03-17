import { IsArray, IsBoolean, IsString } from "class-validator";

/**
 * User validator
 */
export class UserDto {
  @IsString()
  id: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  type: string;

  @IsArray()
  roles: string[];

  @IsBoolean()
  isOauth: boolean;
}
