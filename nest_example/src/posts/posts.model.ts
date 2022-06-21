import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../user/user.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: 1, description: "Unique identifier" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "It's my first post", description: "Post's title" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: "Lorem ipsum...", description: "Post content. Some text." })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: "https://... or some name included in path to static", description: "Name of post's image" })
  @Column({ type: DataType.STRING})
  image: string;

  @ForeignKey(() => User)
  @ApiProperty({ example: 1, description: "User id" })
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}