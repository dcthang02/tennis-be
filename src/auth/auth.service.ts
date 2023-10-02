import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
  ) {}

  async signupByPhone(phone: string) {
    const user = this.userRepository.findOneBy({ phone });
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
}
