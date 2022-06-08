import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { User } from "../user/user.model";

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
              private jwtService: JwtService) {
  }

  async login(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) {
      throw new HttpException("There is no user with current email", HttpStatus.BAD_REQUEST);
    }
    if ( await bcrypt.compare(userDto.password, user.password)) {
      return this.generateToken(user);
    } else {
      throw new UnauthorizedException({ message: "Email or user didn't match" } )
    }
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException("User with current email is already created", HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 3);
    const user = await this.userService.createUser({ email: userDto.email, password: hashPassword });
    return this.generateToken(user);
  }

  generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return { token: this.jwtService.sign(payload) };
  }
}
