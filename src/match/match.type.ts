import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/user.type';

@ObjectType('Match')
export class MatchType {
  @Field((type) => ID)
  id: string;

  @Field()
  date: Date;

  @Field()
  maxPlayers: number;

  @Field()
  note: string;

  @Field((type) => [UserType])
  players: string[];
}
