import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/user.type';

@ObjectType('ProductReview')
export class ProductReviewType {
  @Field(() => ID)
  id: string;

  @Field()
  rating: number;

  @Field()
  commen: string;

  @Field(() => UserType)
  user: string;
}
