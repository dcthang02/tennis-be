import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import {
  LeaguesStatistic,
  MatchStatistic,
  ScoreStatistic,
} from './entity-type';

@Entity()
export class Statistic {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column('jsonb')
  matches: MatchStatistic;

  @Column('jsonb')
  leagues: LeaguesStatistic;

  @Column('jsonb')
  score: ScoreStatistic;
}
