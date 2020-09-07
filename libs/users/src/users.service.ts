import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USERS_REPOSITORY } from '@app/constants';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(userId: string): Promise<User> {
    const user = await this.usersRepository.findOne(userId);
    return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    Object.keys(createUserDto).forEach(key => {
      user[key] = createUserDto[key];
    });
    return this.usersRepository.save(user);
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneOrFail(userId);
    Object.keys(updateUserDto).forEach(key => {
      user[key] = updateUserDto[key];
    });
    return this.usersRepository.save(user);
  }
}
