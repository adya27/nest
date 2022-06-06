import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { User } from "./user.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { RolesModule } from "../roles/roles.module";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule]
})
export class UserModule {
}
