import { DynamicModule, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseSettingsInterface } from './database-settings.interface';
import { getOrmConfig } from './get-orm-config';
import { DatabaseService } from './database.service';

@Global()
export class DatabaseModule {
  public static forRoot(
    settings: DatabaseSettingsInterface,
    entities: any = [],
  ): DynamicModule {
    const ormConfig = getOrmConfig(settings, entities);

    return {
      module: DatabaseModule,
      imports: [TypeOrmModule.forRoot(ormConfig as any)],
      providers: [DatabaseService],
      exports: [DatabaseService],
    };
  }
}
