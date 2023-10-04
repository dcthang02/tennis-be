import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Utility {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  racketBrand: string;

  @Column()
  racketParameter: string;

  @Column()
  usageFee: string;

  @Column()
  backHand: string;

  @Column()
  foreHand: string;

  @Column()
  preferredHand: string;

  @Column()
  ballHand: string;

  @Column()
  clothing: string;

  @Column()
  shoesBrand: string;

  @Column()
  shoesSize: number;
}
