import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Match')
export class MatchType {
  @Field((type) => ID)
  id: string;

  @Field()
  date: Date;

  @Field()
  maxPlayers: number;
}
