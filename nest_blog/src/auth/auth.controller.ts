import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from '../models/user.dto';
import { AuthService } from './auth.service';

@Controller('/users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  register(@Body(ValidationPipe) credentials: RegisterDTO) {
    return this.authService.register(credentials);
  }

  @Post('/login')
  login(@Body(ValidationPipe) credentials: LoginDTO) {
    return this.authService.login(credentials);
  }
}
