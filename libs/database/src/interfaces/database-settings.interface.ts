export interface DatabaseSettingsInterface {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities?: any[];
}
