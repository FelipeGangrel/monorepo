import { Connection } from 'typeorm';
import { User } from './user.entity';

export const usersProviders = [
  {
    provide: 'UserRepository',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['Connection'],
  },
];
