import { Field, InputType } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateUtilityInput {
  @Field({ defaultValue: '', nullable: true })
  racketBrand: string;

  @Field({ defaultValue: '', nullable: true })
  racketParameter: string;

  @Field({ defaultValue: '', nullable: true })
  usageFee: string;

  @Field({ defaultValue: '', nullable: true })
  backHand: string;

  @Field({ defaultValue: '', nullable: true })
  foreHand: string;

  @Field({ defaultValue: '', nullable: true })
  preferredHand: string;

  @Field({ defaultValue: '', nullable: true })
  ballHand: string;

  @Field({ defaultValue: '', nullable: true })
  clothing: string;

  @Field({ defaultValue: '', nullable: true })
  shoesBrand: string;

  @Min(1)
  @Field({ defaultValue: 40, nullable: true })
  shoesSize: number;
}
