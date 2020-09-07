import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseSettingsInterface, DatabaseModule } from '@app/database';
import { User, UsersModule } from '@app/users';

class DatabaseSettings implements DatabaseSettingsInterface {
  type = 'mysql';
  host = 'localhost';
  port = 3306;
  username = 'root';
  password = 'root';
  database = 'loja1';
}

const entities = [User];

@Module({
  imports: [
    DatabaseModule.forRoot(new DatabaseSettings(), entities),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [DatabaseModule],
})
export class AppModule {}
