import { Module } from '@nestjs/common';
import { MatchModule } from './match/match.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match/match.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { StadiumModule } from './stadium/stadium.module';
import { StatisticModule } from './statistic/statistic.module';
import { UtilityModule } from './utility/utility.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './product/product.module';
import { Stadium } from './stadium/stadium.entity';
import { Statistic } from './statistic/statistic.entity';
import { Shop } from './shop/shop.entity';
import { Product } from './product/product.entity';
import { ProductReview } from './product/product-review.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://thang-1:khongcopass@cluster0.nuncdza.mongodb.net/tennismobile',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Match, User, Stadium, Statistic, Shop, Product, ProductReview],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MatchModule,
    UserModule,
    AuthModule,
    StadiumModule,
    StatisticModule,
    UtilityModule,
    ShopModule,
    ProductModule,
  ],
})
export class AppModule {}
