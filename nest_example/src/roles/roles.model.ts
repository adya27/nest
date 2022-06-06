import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../user/user.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: 1, description: "Unique identifier" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "User role" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: "Have all rights", description: "User role description" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;


  @BelongsToMany(() => User, () => UserRoles)
  users: [User];


}