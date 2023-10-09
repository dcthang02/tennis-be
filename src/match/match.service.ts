import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { MongoRepository } from 'typeorm';
import { CreateMatchInput } from './dto/create-match.input';
import { v4 as uuid } from 'uuid';
import { isDateString } from 'class-validator';
import { User } from 'src/user/user.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match) private matchRepository: MongoRepository<Match>,
  ) {}

  async getMatch() {
    return this.matchRepository.find();
  }

  async createMatch(createMatchInput: CreateMatchInput, user: User) {
    const { date, maxPlayers, note, invitedPlayerIds, stadiumId } =
      createMatchInput;

    const match = this.matchRepository.create({
      id: uuid(),
      date: new Date(date),
      maxPlayers,
      note: note || '',
      owner: user.id,
      invitedPlayers: invitedPlayerIds,
      players: [user.id],
      pendingPlayers: [],
      location: stadiumId,
    });
    return this.matchRepository.save(match);
  }
}
