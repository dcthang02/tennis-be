import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Token')
export class TokenType {
  @Field()
  token: string;
}

@ObjectType('AuthSignup')
export class AuthSignupType {
  @Field()
  message: string;
}
