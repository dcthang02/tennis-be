import { Field, InputType } from '@nestjs/graphql';
import { IsPhoneNumber } from 'class-validator';

@InputType()
export class UserPhoneInput {
  @IsPhoneNumber()
  @Field()
  phone: string;
}
