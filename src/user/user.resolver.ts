import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserType } from './user.type';
import { UserService } from './user.service';
import { UserPhoneInput } from './dto/user-phone.input';
import { User } from './user.entity';
import { StatisticService } from 'src/statistic/statistic.service';
import { UtilityService } from 'src/utility/utility.service';
import { ShopService } from 'src/shop/shop.service';
import { ClubService } from 'src/club/club.service';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(
    private userService: UserService,
    private statisticService: StatisticService,
    private utilityService: UtilityService,
    private shopService: ShopService,
    private clubService: ClubService,
  ) {}

  @Query((returns) => UserType)
  userByPhone(
    @Args('phoneInput')
    phoneInput: UserPhoneInput,
  ) {
    const { phone } = phoneInput;
    return this.userService.getUserByPhone(phone);
  }

  @ResolveField()
  async statistic(@Parent() user: User) {
    return this.statisticService.getStatisticById(user.statistic);
  }

  @ResolveField()
  async utility(@Parent() user: User) {
    try {
      return await this.utilityService.getUtilityById(user.utility);
    } catch (error) {
      return null;
    }
  }

  @ResolveField()
  async shop(@Parent() user: User) {
    try {
      return await this.shopService.getShopById(user.shop);
    } catch (error) {
      return null;
    }
  }

  @ResolveField()
  async club(@Parent() user: User) {
    try {
      return await this.clubService.getClubById(user.club);
    } catch (error) {
      return null;
    }
  }
}
