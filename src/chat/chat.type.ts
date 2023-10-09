import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MessageType } from './message.type';
import { UserType } from 'src/user/user.type';

@ObjectType('Chat')
export class ChatType {
  @Field((type) => ID)
  id: string;

  @Field((type) => [UserType])
  users: string[];

  @Field((type) => [MessageType])
  messages: MessageType[];
}
