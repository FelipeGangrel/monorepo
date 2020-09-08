import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CLIENTS_REPOSITORY } from '@app/constants';
import { Client } from './entities';
import { CreateClientDto, UpdateClientDto } from './dto';

@Injectable()
export class ClientsService {
  constructor(
    @Inject(CLIENTS_REPOSITORY)
    private clientsRepository: Repository<Client>,
  ) {}

  async findOne(clientId: string): Promise<Client> {
    const user = await this.clientsRepository.findOne(clientId);
    return user;
  }

  findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  create(createClientDto: CreateClientDto): Promise<Client> {
    const user = new Client();
    Object.keys(createClientDto).forEach(key => {
      user[key] = createClientDto[key];
    });
    return this.clientsRepository.save(user);
  }

  async update(
    clientId: string,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const user = await this.clientsRepository.findOneOrFail(clientId);
    Object.keys(updateClientDto).forEach(key => {
      user[key] = updateClientDto[key];
    });
    return this.clientsRepository.save(user);
  }
}
