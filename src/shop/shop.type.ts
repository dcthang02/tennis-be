import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductType } from 'src/product/product.type';

@ObjectType('Shop')
export class ShopType {
  @Field(() => ID)
  id: string;

  @Field(() => [ProductType])
  products: string[];
}
