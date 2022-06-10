import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: 1, description: "User id" })
  readonly id: number;
  @ApiProperty({ example: "Junk", description: "User ban reason" })
  readonly banReason: string;
}
