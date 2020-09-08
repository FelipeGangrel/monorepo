import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { administratorsProviders } from './administrators.providers';
import { AdministratorsController } from './administrators.controller';

@Module({
  providers: [...administratorsProviders, AdministratorsService],
  controllers: [AdministratorsController],
  exports: [AdministratorsService],
})
export class AdministratorsModule {}
