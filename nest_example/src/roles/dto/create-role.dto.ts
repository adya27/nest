import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({example: 'example@mail.com', description: 'Users email'})
  @IsString({message: "Should be string"})
  readonly value: string;
  @ApiProperty({example: 'hooliganism', description: 'Ban reason'})
  @IsString({message: "Should be string"})
  readonly description: string;
}