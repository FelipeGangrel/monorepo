import {
  Controller,
  Get,
  Injectable,
  Post,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto, UpdateClientDto } from './dto';
import { Client } from './client.entity';

@Injectable()
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get(':id')
  findOne(@Param('id') clientId: string): Promise<Client> {
    return this.clientsService.findOne(clientId);
  }

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }

  @Put(':id')
  update(
    @Param('id') clientId: string,
    @Body() updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    return this.clientsService.update(clientId, updateClientDto);
  }
}
