import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  // data for test
  private readonly users = [
    { id: 1, username: 'jack', password: '123' },
    { id: 2, username: 'jack2', password: '123' },
  ];

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      // dummy id
      id: this.users.length + 11,
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
