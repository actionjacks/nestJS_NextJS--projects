import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async register(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findUser(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }
}
