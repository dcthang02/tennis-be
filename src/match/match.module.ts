import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Match])],
  providers: [MatchService],
})
export class MatchModule {}
