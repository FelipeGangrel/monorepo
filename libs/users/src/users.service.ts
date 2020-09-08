import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USERS_REPOSITORY } from '@app/constants';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { email } });
  }
}
