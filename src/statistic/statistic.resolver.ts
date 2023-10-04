import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StatisticType } from './statistic.type';
import { StatisticService } from './statistic.service';
import { CreateStatisticInput } from './dto/create-statistic.input';

@Resolver((of) => StatisticType)
export class StatisticResolver {
  constructor(private statisticService: StatisticService) {}

  @Query((type) => StatisticType)
  statistic(@Args('id') id: string) {
    return this.statisticService.getStatisticById(id);
  }

  @Mutation((type) => StatisticType)
  createStatistic(
    @Args('createStatisticInput') createStatisticInput: CreateStatisticInput,
  ) {
    return this.statisticService.createStatistic(createStatisticInput);
  }
}
