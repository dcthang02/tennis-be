import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UtilityType } from './utility.type';
import { UtilityService } from './utility.service';
import { CreateUtilityInput } from './dto/create-utility.input';

@Resolver((of) => UtilityType)
export class UtilityResolver {
  constructor(private utilityService: UtilityService) {}

  @Query((returns) => UtilityType)
  utility(@Args('id') id: string) {
    return this.utilityService.getUtilityById(id);
  }

  @Mutation((returns) => UtilityType)
  createUtility(
    @Args('createUtilityInput') createUtilityInput: CreateUtilityInput,
  ) {
    return this.utilityService.createUtility(createUtilityInput);
  }
}
