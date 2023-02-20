import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PasswordsModule, UsersModule } from '../modules';
import { AuthService } from './auth.service';
import { JwtRefreshStrategy, JwtStrategy, LocalStrategy } from './strategies';
import { EnvironmentConfigModule } from '../config';

@Module({
	imports: [EnvironmentConfigModule, UsersModule, PassportModule, JwtModule, PasswordsModule],
	providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshStrategy],
	exports: [AuthService],
})
export class AuthModule {}
