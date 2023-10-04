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
  age: number;

  @Column()
  phone: string;

  @Column()
  image: string;

  @Column()
  birthday: Date;

  @Column()
  gender: UserGender;

  @Column()
  freeTime: boolean[][];

  @Column()
  statistic: string;
}
