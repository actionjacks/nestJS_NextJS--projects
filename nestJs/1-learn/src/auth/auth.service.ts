import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    //generate the password hash
    const hash = await argon.hash(dto.password);
    try {
      //save the new user in the db
      const newUser = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
        // only these fields will be visible when return
        // select: {
        //   id: true,
        //   email: true,
        //   createdAt: true,
        // },
      });
      delete newUser.hash;
      //return the saved user
      return newUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'credentials invalid',
          );
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!foundUser) {
      throw new ForbiddenException('invalid credentials');
    }
    const passwordComparison = await argon.verify(
      foundUser.hash,
      dto.password,
    );
    if (!passwordComparison) {
      throw new ForbiddenException('invalid credentials');
    }
    delete foundUser.hash;
    return foundUser;
  }
}
