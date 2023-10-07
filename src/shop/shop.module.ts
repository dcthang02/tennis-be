import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
