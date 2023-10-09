import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsEnum, IsUUID, MinLength } from 'class-validator';
import { UserGender } from 'src/user/user-gender.enum';

@InputType()
export class AuthVerifyInput {
  @IsUUID('4')
  @Field()
  id: string;

  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  birthday: string;

  @IsEnum(UserGender)
  @Field()
  gender: UserGender;
}
