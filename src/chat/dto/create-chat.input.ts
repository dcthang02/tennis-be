import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class CreateChatInput {
  @IsUUID('4', { each: true })
  @Field((type) => [String])
  userIds: string[];
}
