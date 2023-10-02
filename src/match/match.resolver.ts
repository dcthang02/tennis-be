import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MatchType } from './match.type';
import { MatchService } from './match.service';
import { CreateMatchInput } from './create-match.input';

@Resolver((of) => MatchType)
export class MatchResolver {
  constructor(private matchService: MatchService) {}

  @Query(() => [MatchType])
  matches() {
    return this.matchService.getMatch();
  }

  @Mutation(() => MatchType)
  createMatch(@Args('createMatchInput') createMatchInput: CreateMatchInput) {
    return this.matchService.createMatch(createMatchInput);
  }
}
