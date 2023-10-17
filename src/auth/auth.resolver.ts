import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthSignupType, TokenType } from './auth.type';
import { AuthPhoneInput } from './auth-phone.input';
import { ShopService } from 'src/shop/shop.service';
import { AuthVerifyInput } from './auth-verify.input';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private shopService: ShopService,
  ) {}

  @Mutation((returns) => TokenType)
  signinByPhone(@Args('authPhoneInput') authPhoneInput: AuthPhoneInput) {
    const { phone } = authPhoneInput;
    return this.authService.signinByPhone(phone);
  }

  @Mutation((returns) => TokenType)
  signupByPhone(@Args('authPhoneInput') AuthPhoneInput: AuthPhoneInput) {
    const { phone } = AuthPhoneInput;
    return this.authService.signupByPhone(phone);
  }

  @Mutation((returns) => AuthSignupType)
  async verifyUser(@Args('authVerifyInput') authVerifyInput: AuthVerifyInput) {
    const shop = await this.shopService.createShop();
    return this.authService.verifyUser(authVerifyInput, shop.id);
  }
}
