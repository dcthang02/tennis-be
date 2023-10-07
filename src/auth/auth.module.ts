import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { AuthResolver } from './auth.resolver';
import { ShopModule } from 'src/shop/shop.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ShopModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
