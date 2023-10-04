import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  LeaguesStatistic,
  MatchStatistic,
  ScoreStatistic,
} from './entity-type';

@ObjectType('Statistic')
export class StatisticType {
  @Field((type) => ID)
  id: string;

  @Field((type) => MatchStatistic)
  matches: MatchStatistic;

  @Field((type) => LeaguesStatistic)
  leagues: LeaguesStatistic;

  @Field((type) => ScoreStatistic)
  score: ScoreStatistic;
}
