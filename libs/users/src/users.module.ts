import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database';
import { usersProviders } from './users.providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
