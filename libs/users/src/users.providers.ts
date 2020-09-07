import { Connection } from 'typeorm';
import { CONNECTION, USERS_REPOSITORY } from '@app/constants';
import { User } from './user.entity';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [CONNECTION],
  },
];
