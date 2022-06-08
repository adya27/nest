import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../user/user.model";
import { Role } from "./roles.model";

@Table({ tableName: "userRoles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: 1, description: "Unique identifier" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({ example: "ADMIN", description: "User role" })
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: "Have all rights", description: "User role description" })
  @Column({ type: DataType.INTEGER })
  userId: number;
}