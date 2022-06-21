import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @ApiProperty({ example: 1, description: "User id" })
  @IsNumber({}, {message: 'Should be a string'})
  readonly id: number;
  @ApiProperty({ example: 'ADMIN', description: "User role" })
  @IsString({ message: 'Should be a string'})
  readonly role: string;
}