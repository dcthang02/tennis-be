import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Stadium')
export class StadiumType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field((type) => [String])
  images: string[];
}
