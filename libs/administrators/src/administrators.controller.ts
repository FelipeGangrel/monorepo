import {
  Controller,
  Get,
  Injectable,
  Post,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto, UpdateAdministratorDto } from './dto';
import { Administrator } from './entities';

@Injectable()
@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Get(':id')
  findOne(@Param('id') administratorId: string): Promise<Administrator> {
    return this.administratorsService.findOne(administratorId);
  }

  @Get()
  findAll(): Promise<Administrator[]> {
    return this.administratorsService.findAll();
  }

  @Post()
  create(
    @Body() createAdministratorDto: CreateAdministratorDto,
  ): Promise<Administrator> {
    return this.administratorsService.create(createAdministratorDto);
  }

  @Put(':id')
  update(
    @Param('id') administratorId: string,
    @Body() updateAdministratorDto: UpdateAdministratorDto,
  ): Promise<Administrator> {
    return this.administratorsService.update(
      administratorId,
      updateAdministratorDto,
    );
  }
}
