import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Utility')
export class UtilityType {
  @Field((type) => ID)
  id: string;

  @Field()
  racketBrand: string;

  @Field()
  racketParameter: string;

  @Field()
  usageFee: string;

  @Field()
  backHand: string;

  @Field()
  foreHand: string;

  @Field()
  preferredHand: string;

  @Field()
  ballHand: string;

  @Field()
  clothing: string;

  @Field()
  shoesBrand: string;

  @Field()
  shoesSize: number;
}
