import { ChildEntity, Column } from 'typeorm';
import { User } from '@app/users';

export enum AdministratorRole {
  SUPER_USER = 'superuser',
  MANAGER = 'manager',
}

@ChildEntity()
export class Administrator extends User {
  @Column({
    type: 'set',
    enum: AdministratorRole,
    default: [],
  })
  roles: AdministratorRole[];
}
