import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club) private clubRepository: MongoRepository<Club>,
  ) {}

  async getClubs() {
    return this.clubRepository.find();
  }

  async getClubById(id: string) {
    const club = await this.clubRepository.findOneBy({ id });
    if (!club) {
      throw new NotFoundException();
    }
    return club;
  }
}
