import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stadium } from './stadium.entity';
import { MongoRepository } from 'typeorm';
import { CreateStadiumInput } from './dto/create-stadium.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StadiumService {
  constructor(
    @InjectRepository(Stadium)
    private stadiumRepository: MongoRepository<Stadium>,
  ) {}

  async createStadium(createStadiumInput: CreateStadiumInput) {
    const { name, address, images } = createStadiumInput;
    const stadium = this.stadiumRepository.create({
      id: uuid(),
      name,
      address,
      images,
    });
    return this.stadiumRepository.save(stadium);
  }

  async getStadium(id: string) {
    const stadium = await this.stadiumRepository.findOneBy({ id });
    if (!stadium) {
      throw new NotFoundException();
    }
    return stadium;
  }
}
