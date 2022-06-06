import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private userRepository: typeof User,
              private rolesService: RolesService) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue('USER');
    await user.$set('roles', [role.id])
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
