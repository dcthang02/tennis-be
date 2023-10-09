import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { MatchType } from './match.type';
import { MatchService } from './match.service';
import { CreateMatchInput } from './dto/create-match.input';
import { Match } from './match.entity';
import { UserService } from 'src/user/user.service';
import { StadiumService } from 'src/stadium/stadium.service';
import { Request, UseGuards } from '@nestjs/common';
import { MyAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/user/user.entity';

@UseGuards(MyAuthGuard)
@Resolver((of) => MatchType)
export class MatchResolver {
  constructor(
    private matchService: MatchService,
    private userService: UserService,
    private stadiumService: StadiumService,
  ) {}

  @Query(() => [MatchType])
  matches() {
    return this.matchService.getMatch();
  }

  @Mutation(() => MatchType)
  createMatch(
    @Args('createMatchInput') createMatchInput: CreateMatchInput,
    @GetUser() user: User,
  ) {
    return this.matchService.createMatch(createMatchInput, user);
  }

  @ResolveField()
  async players(@Parent() match: Match) {
    return this.userService.getUsersInListId(match.players);
  }

  @ResolveField()
  async owner(@Parent() match: Match) {
    return this.userService.getUserById(match.owner);
  }

  @ResolveField()
  async pendingPlayers(@Parent() match: Match) {
    return this.userService.getUsersInListId(match.pendingPlayers);
  }

  @ResolveField()
  async invitedPlayers(@Parent() match: Match) {
    return this.userService.getUsersInListId(match.invitedPlayers);
  }

  @ResolveField()
  async location(@Parent() match: Match) {
    try {
      const stadium = await this.stadiumService.getStadium(match.location);
      return stadium;
    } catch (error) {
      return null;
    }
  }
}
