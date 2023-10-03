import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
  ) {}

  async getUserByPhone(phone: string) {
    const user = await this.userRepository.findOneBy({ phone });
    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return user;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return user;
  }

  async getUsersInListId(userIds: string[]) {
    return this.userRepository.find({
      where: {
        id: {
          $in: userIds,
        },
      },
    });
  }
}
