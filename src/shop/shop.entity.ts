import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Shop {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column('array', { default: [] })
  products: string[];
}
