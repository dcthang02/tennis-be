import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ProductStatus } from './product.entity';
import { ProductReviewType } from './product-review.type';

registerEnumType(ProductStatus, {
  name: 'ProductStatus',
});

@ObjectType('Product')
export class ProductType {
  @Field(() => ID)
  id: string;

  @Field()
  sellerPhone: string;

  @Field()
  sellerFacebook: string;

  @Field()
  sellerEmail: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  images: string[];

  @Field()
  price: number;

  @Field(() => ProductStatus)
  status: ProductStatus;

  @Field()
  rating: number;

  @Field()
  sold: number;

  @Field(() => ProductReviewType)
  reviews: string[];
}
