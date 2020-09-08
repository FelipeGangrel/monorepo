export interface SignOptions {
  expiresIn: string;
}

export interface JwtSettingsInterface {
  secret: string;
  signOptions: SignOptions;
}
