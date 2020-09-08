import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
