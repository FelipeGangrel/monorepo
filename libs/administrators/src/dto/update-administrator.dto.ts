import { AdministratorRole } from '../entities';

export class UpdateAdministratorDto {
  email?: string;
  name?: string;
  passord?: string;
  roles?: [AdministratorRole];
}
