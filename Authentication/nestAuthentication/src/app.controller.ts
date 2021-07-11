import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Req,
  Get,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);
    return this.appService.register({
      name,
      email,
      password: hashedPassword,
    });
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.appService.findUser({ email });

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }
    //generate token
    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });

    return `hello ${user.name} TOKEN ${jwt}`;
  }

  @Get('user')
  async getUser(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }
      const user = await this.appService.findUser({ id: data['id'] });
      const { password, ...result } = user;
      //
      return result;
      //
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'success logout',
    };
  }
}
