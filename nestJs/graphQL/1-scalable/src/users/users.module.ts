import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolver';

@Module({
  providers: [UserResolver, UsersService],
})
export class UserModule {}
