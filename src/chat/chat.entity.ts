import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { MessageType } from './message.type';

@Entity()
export class Chat {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  users: string[];

  @Column('jsonb')
  messages: MessageType[];
}
