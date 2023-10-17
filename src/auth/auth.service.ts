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
import { auth } from 'firebase-admin';
import { Statistic } from 'src/statistic/statistic.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
    @InjectRepository(Statistic)
    private statisticRepository: MongoRepository<Statistic>,
    private jwtService: JwtService,
  ) {}

  async checkFirebaseUserByPhone(phone: string) {
    try {
      const fbUser = await auth().getUserByPhoneNumber(phone);
      return true;
    } catch (error) {
      return false;
    }
  }

  async signinByPhone(phone: string) {
    const fbUserExist = await this.checkFirebaseUserByPhone(phone);
    console.log(fbUserExist);
    if (!fbUserExist) {
      throw new UnauthorizedException();
    }
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
    const fbUserExist = await this.checkFirebaseUserByPhone(phone);
    if (fbUserExist) {
      throw new ConflictException();
    }
    const newUser = this.userRepository.create({
      id: uuid(),
      phone,
    });
    await this.userRepository.save(newUser);
    const accessToken = await this.jwtService.sign({ phone });
    return {
      token: accessToken,
    };
  }

  async verifyUser(authVerifyInput: AuthVerifyInput, shopId: string) {
    const { id, birthday, name, gender, club } = authVerifyInput;
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException();
    }
    const statistic = this.statisticRepository.create({
      id: uuid(),
      matches: {
        all: 0,
        lost: 0,
        won: 0,
      },
      leagues: {
        lost: 0,
        matches: 0,
        won: 0,
      },
      score: {
        average: 0,
        sum: 0,
        won: 0,
      },
    });
    user.birthday = new Date(birthday);
    user.name = name;
    user.gender = gender;
    user.shop = shopId;
    user.club = club;
    user.statistic = statistic.id;
    await this.statisticRepository.save(statistic);
    await this.userRepository.save(user);
    return {
      message: 'Ok',
    };
  }
}
