import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "example@mail.com", description: "User email" })
  @IsString({ message: "Should be a string" })
  @IsEmail({}, { message: "Should be email" })
  readonly email: string;
  @ApiProperty({ example: "12345", description: "User password" })
  @IsString({ message: "Should be a string" })
  @Length(4, 16, { message: "Should be longer than 4 symbols and shorter than 16" })
  readonly password: string;
}
