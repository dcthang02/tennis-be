import { Module } from '@nestjs/common';
import { StadiumService } from './stadium.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stadium } from './stadium.entity';
import { StadiumResolver } from './stadium.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Stadium])],
  providers: [StadiumResolver, StadiumService],
  exports: [StadiumService],
})
export class StadiumModule {}
