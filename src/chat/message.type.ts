import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageType {
  @Field((type) => ID)
  userId: string;

  @Field()
  message: string;

  @Field((type) => Date)
  date: Date;
}
