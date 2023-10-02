import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { MatchResolver } from './match.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Match])],
  providers: [MatchResolver, MatchService],
})
export class MatchModule {}
