import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { MatchResolver } from './match.resolver';
import { UserModule } from 'src/user/user.module';
import { StadiumModule } from 'src/stadium/stadium.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Match]), UserModule, StadiumModule],
  providers: [MatchResolver, MatchService],
})
export class MatchModule {}
