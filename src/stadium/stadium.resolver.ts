import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StadiumType } from './stadium.type';
import { StadiumService } from './stadium.service';
import { CreateStadiumInput } from './dto/create-stadium.input';

@Resolver((of) => StadiumType)
export class StadiumResolver {
  constructor(private stadiumService: StadiumService) {}

  @Query((type) => StadiumType)
  stadium(@Args('id') id: string) {
    return this.stadiumService.getStadium(id);
  }

  @Query((type) => [StadiumType])
  stadiums() {
    return this.stadiumService.getStadiums();
  }

  @Mutation((type) => StadiumType)
  createStadium(
    @Args('createStadiumInput') createStadiumInput: CreateStadiumInput,
  ) {
    return this.stadiumService.createStadium(createStadiumInput);
  }
}
