export class CreateClientDto {
  email: string;
  name: string;
  passord: string;
}

export class UpdateClientDto {
  email?: string;
  name?: string;
  passord?: string;
}
