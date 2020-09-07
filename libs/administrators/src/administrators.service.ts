import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ADMINISTRATORS_REPOSITORY } from '@app/constants';
import { Administrator } from './administrator.entity';
import { CreateAdministratorDto, UpdateAdministratorDto } from './dto';

@Injectable()
export class AdministratorsService {
  constructor(
    @Inject(ADMINISTRATORS_REPOSITORY)
    private administratorsRepository: Repository<Administrator>,
  ) {}

  async findOne(administratorId: string): Promise<Administrator> {
    const user = await this.administratorsRepository.findOne(administratorId);
    return user;
  }

  findAll(): Promise<Administrator[]> {
    return this.administratorsRepository.find();
  }

  create(createClientDto: CreateAdministratorDto): Promise<Administrator> {
    const user = new Administrator();
    Object.keys(createClientDto).forEach(key => {
      user[key] = createClientDto[key];
    });
    return this.administratorsRepository.save(user);
  }

  async update(
    administratorId: string,
    updateClientDto: UpdateAdministratorDto,
  ): Promise<Administrator> {
    const user = await this.administratorsRepository.findOneOrFail(
      administratorId,
    );
    Object.keys(updateClientDto).forEach(key => {
      user[key] = updateClientDto[key];
    });
    return this.administratorsRepository.save(user);
  }
}
