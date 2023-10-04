import { Module } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Statistic } from './statistic.entity';
import { StatisticResolver } from './statistic.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Statistic])],
  providers: [StatisticResolver, StatisticService],
  exports: [StatisticService],
})
export class StatisticModule {}
