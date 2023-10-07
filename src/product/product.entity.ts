import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

export enum ProductStatus {
  STOKING = 'Còn hàng',
  OUT_OF_STOKE = 'Hết hàng',
}

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  sellerPhone: string;

  @Column()
  sellerFacebook: string;

  @Column()
  sellerEmail: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  images: string[];

  @Column()
  price: number;

  @Column()
  status: ProductStatus;

  @Column()
  rating: number;

  @Column()
  sold: number;

  @Column()
  reviews: string[];
}
