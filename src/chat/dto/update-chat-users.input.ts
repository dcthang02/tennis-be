import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserChatInput {
  @Field()
  userIds: string[];
}
