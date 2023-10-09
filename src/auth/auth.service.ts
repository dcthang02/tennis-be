import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { AuthVerifyInput } from './auth-verify.input';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
    private jwtService: JwtService,
  ) {}

  async signinByPhone(phone: string) {
    const user = await this.userRepository.findOneBy({ phone });
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { phone };
    const accessToken = await this.jwtService.sign(payload);
    return {
      token: accessToken,
    };
  }

  async signupByPhone(phone: string) {
    const user = await this.userRepository.findOneBy({ phone });

    if (user) {
      throw new ConflictException('Phone number is already in use');
    }
    const newUser = this.userRepository.create({
      id: uuid(),
      phone,
    });
    await this.userRepository.save(newUser);
    return {
      message: 'Ok',
    };
  }

  async verifyUser(authVerifyInput: AuthVerifyInput, shopId: string) {
    const { id, birthday, name, gender, club } = authVerifyInput;
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException();
    }
    user.birthday = new Date(birthday);
    user.name = name;
    user.gender = gender;
    user.shop = shopId;
    user.club = club;
    await this.userRepository.save(user);
    return {
      message: 'Ok',
    };
  }
}
