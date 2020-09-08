import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  providers: [...usersProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
