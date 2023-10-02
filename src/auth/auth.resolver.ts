import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthSignupType } from './auth.type';
import { AuthPhoneInput } from './auth-phone.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => AuthSignupType)
  signupByPhone(@Args('authPhoneInput') AuthPhoneInput: AuthPhoneInput) {
    const { phone } = AuthPhoneInput;
    return this.authService.signupByPhone(phone);
  }
}
