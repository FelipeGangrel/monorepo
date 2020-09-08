import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { clientsProviders } from './clients.providers';
import { ClientsController } from './clients.controller';

@Module({
  providers: [...clientsProviders, ClientsService],
  controllers: [ClientsController],
  exports: [ClientsService],
})
export class ClientsModule {}
