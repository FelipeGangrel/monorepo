import { AdministratorRole } from '../administrator.entity';

export class CreateAdministratorDto {
  email: string;
  name: string;
  passord: string;
  roles?: [AdministratorRole];
}

export class UpdateAdministratorDto {
  email?: string;
  name?: string;
  passord?: string;
  roles?: [AdministratorRole];
}
