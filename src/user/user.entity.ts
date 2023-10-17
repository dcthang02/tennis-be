import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { UserGender } from './user-gender.enum';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  image: string;

  @Column()
  birthday: Date;

  @Column()
  gender: UserGender;

  @Column()
  rank: number;

  @Column()
  freeTime: boolean[][];

  @Column()
  statistic: string;

  @Column()
  utility: string;

  @Column()
  shop: string;

  @Column()
  club: string;
}
