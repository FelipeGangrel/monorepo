import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { DatabaseSettingsInterface } from '../interfaces';

export function getOrmConfig(
  settings: DatabaseSettingsInterface,
): MysqlConnectionOptions {
  return {
    type: 'mysql',
    host: settings.host,
    port: settings.port,
    username: settings.username,
    password: settings.password,
    database: settings.database,
    entities: settings.entities || [],
    synchronize: true,
  };
}
