import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { StatisticModule } from 'src/statistic/statistic.module';
import { UtilityModule } from 'src/utility/utility.module';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), StatisticModule, UtilityModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
