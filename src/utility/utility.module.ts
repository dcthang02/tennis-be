import { Module } from '@nestjs/common';
import { UtilityService } from './utility.service';
import { UtilityResolver } from './utility.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utility } from './utility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Utility])],
  providers: [UtilityResolver, UtilityService],
  exports: [UtilityService],
})
export class UtilityModule {}
