import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Statistic } from './statistic.entity';
import { MongoRepository } from 'typeorm';
import { CreateStatisticInput } from './dto/create-statistic.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StatisticService {
  constructor(
    @InjectRepository(Statistic)
    private statisticRepository: MongoRepository<Statistic>,
  ) {}

  async createStatistic(createStatisticInput: CreateStatisticInput) {
    const { matches, leagues, score } = createStatisticInput;

    const statistic = this.statisticRepository.create({
      id: uuid(),
      matches: {
        ...matches,
        lost: matches.all - matches.won,
      },
      leagues: {
        ...leagues,
        lost: leagues.matches - leagues.won,
      },
      score,
    });

    return this.statisticRepository.save(statistic);
  }

  async getStatisticById(id: string) {
    const statistic = await this.statisticRepository.findOneBy({ id });

    if (!statistic) {
      throw new NotFoundException();
    }
    return statistic;
  }
}
