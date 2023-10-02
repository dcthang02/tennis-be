import { Module } from '@nestjs/common';
import { MatchModule } from './match/match.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match/match.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://thang-1:khongcopass@cluster0.nuncdza.mongodb.net/tennismobile',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Match],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MatchModule,
  ],
})
export class AppModule {}
