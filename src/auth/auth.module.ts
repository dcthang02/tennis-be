import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { AuthResolver } from './auth.resolver';
import { ShopModule } from 'src/shop/shop.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { Statistic } from 'src/statistic/statistic.entity';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'THISISSUPERSUPERSECRET',
      signOptions: {
        expiresIn: 86400,
      },
    }),
    TypeOrmModule.forFeature([User, Statistic]),
    ShopModule,
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
