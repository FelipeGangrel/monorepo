import { Injectable, Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@Inject('Connection') public connection: Connection) {}

  getRepository(entity: any): Repository<any> {
    return this.connection.getRepository(entity);
  }

  async closeConnection() {
    const connection = this.connection;
    if (connection.isConnected) {
      await this.connection.close();
    }
  }
}
