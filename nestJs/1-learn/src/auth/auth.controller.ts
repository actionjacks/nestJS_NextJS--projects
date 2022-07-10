import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(
    dto: AuthDto,
    // @Body('email') email: string,
    // @Body('password') password: string,
  ) {
    this.authService.signup();
  }

  @Post('signin')
  signin() {
    this.authService.signin();
  }
}
