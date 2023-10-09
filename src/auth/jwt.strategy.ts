import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/user.entity';
import { MongoRepository } from 'typeorm';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
  ) {
    super({
      secretOrKey: 'THISISSUPERSUPERSECRET',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload) {
    const { phone } = payload;
    const user = await this.userRepository.findOneBy({ phone });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
