import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Club')
export class ClubType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;
}
