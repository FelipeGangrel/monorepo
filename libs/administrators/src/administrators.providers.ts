import { Connection } from 'typeorm';
import { CONNECTION, ADMINISTRATORS_REPOSITORY } from '@app/constants';
import { Administrator } from './entities';

export const administratorsProviders = [
  {
    provide: ADMINISTRATORS_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(Administrator),
    inject: [CONNECTION],
  },
];
