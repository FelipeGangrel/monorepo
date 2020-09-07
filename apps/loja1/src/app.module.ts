import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseSettingsInterface, DatabaseModule } from '@app/database';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

class DatabaseSettings implements DatabaseSettingsInterface {
  type = 'mysql';
  host = 'localhost';
  port = 3306;
  username = 'root';
  password = 'root';
  database = 'loja1';
}

const settings = new DatabaseSettings();

@Module({
  imports: [DatabaseModule.forRoot(settings, [User]), UsersModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [DatabaseModule],
})
export class AppModule {}
