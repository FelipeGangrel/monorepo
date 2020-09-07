import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database';
import { AdministratorsService } from './administrators.service';
import { administratorsProviders } from './administrators.providers';
import { AdministratorsController } from './administrators.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...administratorsProviders, AdministratorsService],
  controllers: [AdministratorsController],
  exports: [AdministratorsService],
})
export class AdministratorsModule {}
