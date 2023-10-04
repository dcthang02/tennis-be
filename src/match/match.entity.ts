import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Match {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  date: Date;

  @Column()
  maxPlayers: number;

  @Column()
  note: string;

  @Column()
  owner: string;

  @Column()
  players: string[];

  @Column()
  pendingPlayers: string[];

  @Column()
  invitedPlayers: string[];

  @Column()
  location: string;
}
