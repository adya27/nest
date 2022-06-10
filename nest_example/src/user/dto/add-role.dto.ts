import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({ example: 1, description: "User id" })
  readonly id: number;
  @ApiProperty({ example: 'ADMIN', description: "User role" })
  readonly role: string;
}