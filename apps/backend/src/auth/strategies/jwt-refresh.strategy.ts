import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayloadBody, RequestUserInfo } from '@app/shared-types';
import parseJwtFromCookie from './utils/parseJwtFromCookie';
import { JWT_COOKIE_REFRESH_TOKEN } from '../consts';
import { EnvConfig, JwtEnvConfig } from '../../config';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
	constructor(private readonly configService: ConfigService<EnvConfig>) {
		const jwtEnvConfig = configService.get<JwtEnvConfig>('jwt');
		super({
			secretOrKey: jwtEnvConfig.REFRESH_TOKEN_SECRET,
			ignoreExpiration: false,
			jwtFromRequest: ExtractJwt.fromExtractors([
				parseJwtFromCookie(JWT_COOKIE_REFRESH_TOKEN),
				ExtractJwt.fromAuthHeaderAsBearerToken(),
			]),
		});
	}

	validate(payload: JwtPayloadBody): RequestUserInfo {
		return { userId: payload.sub, username: payload.username, roles: payload.roles };
	}
}
