import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStadiumInput {
  @MinLength(1)
  @Field()
  name: string;

  @MinLength(1)
  @Field()
  address: string;

  @Field((type) => [String])
  images: string[];
}
