import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserGender } from './user-gender.enum';

@ObjectType('User')
export class UserType {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  age: number;

  @Field()
  phone: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  birthday: Date;

  @Field()
  gender: UserGender;

  @Field(() => [Boolean], {
    nullable: true,
  })
  freeTime: boolean[][];
}
