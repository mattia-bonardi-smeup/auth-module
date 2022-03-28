import { IsBoolean, IsNumber, IsString } from "class-validator";

export class AddressDto {
  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  country?: string;

  @IsNumber()
  cap: number;
}

export class PhoneDto {
  @IsString()
  prefix: string;

  @IsString()
  number: string;

  @IsBoolean()
  isValid: boolean;
}
