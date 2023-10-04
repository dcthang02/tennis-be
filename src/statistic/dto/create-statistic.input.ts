import { Field, InputType } from '@nestjs/graphql';
import {
  LeaguesStatistic,
  MatchStatistic,
  ScoreStatistic,
} from '../entity-type';

@InputType()
class MatchStatisticInput {
  @Field()
  all: number;

  @Field()
  won: number;
}

@InputType()
class LeaguesStatisticInput {
  @Field()
  matches: number;

  @Field()
  won: number;
}

@InputType()
class ScoreStatisticInput {
  @Field()
  sum: number;

  @Field()
  won: number;

  @Field()
  average: number;
}

@InputType()
export class CreateStatisticInput {
  @Field((type) => MatchStatisticInput)
  matches: MatchStatisticInput;

  @Field((type) => LeaguesStatisticInput)
  leagues: LeaguesStatisticInput;

  @Field((type) => ScoreStatisticInput)
  score: ScoreStatisticInput;
}
