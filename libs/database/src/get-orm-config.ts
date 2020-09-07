import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { DatabaseSettingsInterface } from './database-settings.interface';

export function getOrmConfig(
  settings: DatabaseSettingsInterface,
  entities: any = [],
): MysqlConnectionOptions {
  return {
    type: 'mysql',
    host: settings.host,
    port: settings.port,
    username: settings.username,
    password: settings.password,
    database: settings.database,
    entities,
    synchronize: true,
  };
}
