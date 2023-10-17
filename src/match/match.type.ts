import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StadiumType } from 'src/stadium/stadium.type';
import { UserType } from 'src/user/user.type';

@ObjectType('Match')
export class MatchType {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  date: Date;

  @Field({ nullable: true })
  @Field()
  maxPlayers: number;

  @Field({ nullable: true })
  note: string;

  @Field((type) => UserType)
  owner: string;

  @Field((type) => [UserType])
  players: string[];

  @Field((type) => [UserType])
  pendingPlayers: string[];

  @Field((type) => [UserType])
  invitedPlayers: string[];

  @Field((type) => StadiumType, { nullable: true })
  location: string;
}
