import { Resolver } from '@nestjs/graphql';
import { MatchType } from './match.type';

@Resolver((of) => MatchType)
export class MatchResolver {}
