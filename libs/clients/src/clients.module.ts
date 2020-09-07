import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database';
import { ClientsService } from './clients.service';
import { clientsProviders } from './clients.providers';
import { ClientsController } from './clients.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...clientsProviders, ClientsService],
  controllers: [ClientsController],
  exports: [ClientsService],
})
export class ClientsModule {}
