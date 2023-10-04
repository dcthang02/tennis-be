import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utility } from './utility.entity';
import { MongoRepository } from 'typeorm';
import { CreateUtilityInput } from './dto/create-utility.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UtilityService {
  constructor(
    @InjectRepository(Utility)
    private utilityRepository: MongoRepository<Utility>,
  ) {}

  async getUtilityById(id: string) {
    const utility = await this.utilityRepository.findOneBy({ id });

    if (!utility) {
      throw new NotFoundException();
    }
    return utility;
  }

  async createUtility(createUtilityInput: CreateUtilityInput) {
    const utility = this.utilityRepository.create({
      id: uuid(),
      ...createUtilityInput,
    });

    return this.utilityRepository.save(utility);
  }
}
