import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class ProductReview {
  @ObjectIdColumn()
  _id: string;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @Column()
  user: string;
}
