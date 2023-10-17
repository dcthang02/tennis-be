import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserGender } from './user-gender.enum';
import { StatisticType } from 'src/statistic/statistic.type';
import { UtilityType } from 'src/utility/utility.type';
import { ShopType } from 'src/shop/shop.type';
import { ClubType } from 'src/club/club.type';

@ObjectType('User')
export class UserType {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  birthday: Date;

  @Field({ nullable: true })
  gender: UserGender;

  @Field({ nullable: true })
  rank: number;

  @Field(() => [Boolean], {
    nullable: true,
  })
  freeTime: boolean[][];

  @Field((type) => StatisticType, { nullable: true })
  statistic: string;

  @Field((type) => UtilityType, { nullable: true })
  utility: string;

  @Field((type) => ShopType, { nullable: true })
  shop: string;

  @Field((type) => ClubType, { nullable: true })
  club: string;
}
