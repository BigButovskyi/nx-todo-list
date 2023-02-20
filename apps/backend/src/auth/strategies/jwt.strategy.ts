import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayloadBody, RequestUserInfo } from '@app/shared-types';
import parseJwtFromCookie from './utils/parseJwtFromCookie';
import { JWT_COOKIE_ACCESS_TOKEN } from '../consts';
import { EnvConfig, JwtEnvConfig } from '../../config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly configService: ConfigService<EnvConfig>) {
		const jwtEnvConfig = configService.get<JwtEnvConfig>('jwt');
		super({
			secretOrKey: jwtEnvConfig.ACCESS_TOKEN_SECRET,
			ignoreExpiration: false,
			jwtFromRequest: ExtractJwt.fromExtractors([
				parseJwtFromCookie(JWT_COOKIE_ACCESS_TOKEN),
				ExtractJwt.fromAuthHeaderAsBearerToken(),
			]),
		});
	}

	validate(payload: JwtPayloadBody): RequestUserInfo {
		return { userId: payload.sub, username: payload.username, roles: payload.roles };
	}
}
