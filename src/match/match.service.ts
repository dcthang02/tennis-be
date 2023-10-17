import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { MongoRepository } from 'typeorm';
import { CreateMatchInput } from './dto/create-match.input';
import { v4 as uuid } from 'uuid';
import { User } from 'src/user/user.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match) private matchRepository: MongoRepository<Match>,
  ) {}

  async getMatches() {
    return this.matchRepository.find();
  }

  async getMatch(id: string) {
    const match = await this.matchRepository.findOneBy({
      id,
    });
    if (!match) {
      throw new NotFoundException();
    }
    return match;
  }

  async getNextMatches(user: User) {
    const matches = await this.matchRepository.find();
    return matches.filter(
      (match) =>
        match.owner === user.id ||
        match.players.includes(user.id) ||
        match.invitedPlayers.includes(user.id) ||
        match.pendingPlayers.includes(user.id),
    );
  }

  async createMatch(createMatchInput: CreateMatchInput, user: User) {
    const { date, maxPlayers, note, invitedPlayerIds, stadiumId } =
      createMatchInput;

    const match = this.matchRepository.create({
      id: uuid(),
      date: date ? new Date(date) : null,
      maxPlayers,
      note: note || '',
      owner: user.id,
      invitedPlayers: invitedPlayerIds,
      players: [user.id],
      pendingPlayers: [],
      location: stadiumId || null,
    });
    return this.matchRepository.save(match);
  }
}
