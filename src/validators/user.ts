import {
  IsArray,
  IsBoolean,
  IsObject,
  IsString,
  ValidateNested,
} from "class-validator";
import { AddressDto, PhoneDto } from "./general";

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

  @IsObject()
  @ValidateNested()
  address: AddressDto;

  @IsObject()
  @ValidateNested()
  phone: PhoneDto;

  @IsString()
  picture: string;
}
