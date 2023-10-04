import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MatchStatistic {
  @Field()
  all: number;

  @Field()
  won: number;

  @Field()
  lost: number;
}

@ObjectType()
export class LeaguesStatistic {
  @Field()
  matches: number;

  @Field()
  won: number;

  @Field()
  lost: number;
}

@ObjectType()
export class ScoreStatistic {
  @Field()
  sum: number;

  @Field()
  won: number;

  @Field()
  average: number;
}
