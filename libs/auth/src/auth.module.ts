import { DynamicModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@app/users';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtSettingsInterface } from './jwt-settings.interface';

export class AuthModule {
  public static forRoot(settings: JwtSettingsInterface): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
          ...settings,
        }),
      ],
      providers: [AuthService, LocalStrategy],
      controllers: [AuthController],
    };
  }
}
