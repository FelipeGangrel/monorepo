import { Module } from '@nestjs/common';
import { DatabaseSettingsInterface, DatabaseModule } from '@app/database';
import { User } from '@app/users';
import { Client, ClientsModule } from '@app/clients';
import { Administrator, AdministratorsModule } from '@app/administrators';

class DatabaseSettings implements DatabaseSettingsInterface {
  type = 'mysql';
  host = 'localhost';
  port = 3306;
  username = 'root';
  password = 'root';
  database = 'loja2';
}

const entities = [User, Client, Administrator];

@Module({
  imports: [
    DatabaseModule.forRoot(new DatabaseSettings(), entities),
    ClientsModule,
    AdministratorsModule,
  ],
  exports: [DatabaseModule],
})
export class AppModule {}
