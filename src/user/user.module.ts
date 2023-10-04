import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { StatisticModule } from 'src/statistic/statistic.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), StatisticModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
