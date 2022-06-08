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
    const role = await this.rolesService.getRoleByValue("ADMIN");
    await user.$set("roles", [role.id]);
    return await this.getUserByEmail(dto.email);
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: {all: true} });
    return user;
  }
}
