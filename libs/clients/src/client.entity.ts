import { ChildEntity } from 'typeorm';
import { User } from '@app/users';

@ChildEntity()
export class Client extends User {}
