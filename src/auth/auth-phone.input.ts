import { Field, InputType } from '@nestjs/graphql';
import { IsPhoneNumber } from 'class-validator';

@InputType()
export class AuthPhoneInput {
  @IsPhoneNumber()
  @Field()
  phone: string;
}
