import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserType } from './user.type';
import { UserService } from './user.service';
import { IsPhoneNumber } from 'class-validator';
import { UserPhoneInput } from './dto/user-phone.input';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => UserType)
  userByPhone(
    @Args('phoneInput')
    phoneInput: UserPhoneInput,
  ) {
    const { phone } = phoneInput;
    return this.userService.getUserByPhone(phone);
  }
}
