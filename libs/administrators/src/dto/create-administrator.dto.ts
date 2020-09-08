import { AdministratorRole } from '../entities';

export class CreateAdministratorDto {
  email: string;
  name: string;
  passord: string;
  roles?: [AdministratorRole];
}
