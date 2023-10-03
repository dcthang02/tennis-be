import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { MongoRepository } from 'typeorm';
import { CreateMatchInput } from './create-match.input';
import { v4 as uuid } from 'uuid';
import { isDateString } from 'class-validator';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match) private matchRepository: MongoRepository<Match>,
  ) {}

  async getMatch() {
    return this.matchRepository.find();
  }

  async createMatch(createMatchInput: CreateMatchInput) {
    const { date, maxPlayers, note, playerIds } = createMatchInput;

    const match = this.matchRepository.create({
      id: uuid(),
      date: new Date(date),
      maxPlayers,
      note: note || '',
      players: playerIds,
    });
    return this.matchRepository.save(match);
  }
}
