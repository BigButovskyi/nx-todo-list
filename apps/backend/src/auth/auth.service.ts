import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt/dist/interfaces';
import { JwtPayloadBody, RequestUserInfo } from '@app/shared-types';
import { PasswordsService, UsersService } from '../modules';
import { EnvConfig, JwtEnvConfig } from '../config';
import { UserEntity } from '../database/typeOrm/entities';

@Injectable()
export class AuthService {
	private readonly jwtConfig: JwtEnvConfig;

	constructor(
		private readonly configService: ConfigService<EnvConfig>,
		private readonly usersService: UsersService,
		private readonly passwordsService: PasswordsService,
		private readonly jwtService: JwtService,
	) {
		this.jwtConfig = this.configService.get('jwt');
	}

	async validateUser(username: string, password: string): Promise<UserEntity | null> {
		const user = await this.usersService.getUserByUserName(username);
		if (!user) return null;

		const { password: dbPassword } = user;

		const isPasswordMatch = await this.passwordsService.comparePasswords(password, dbPassword);
		if (isPasswordMatch) {
			return user;
		}
		return null;
	}

	async login(user: UserEntity) {
		const jwtPayload: JwtPayloadBody = { username: user.username, sub: user.id, roles: user.roles };
		return this.generateJwtTokens(jwtPayload);
	}

	async refreshTokens(userInfo: RequestUserInfo) {
		const jwtPayload: JwtPayloadBody = { username: userInfo.username, sub: userInfo.userId, roles: userInfo.roles };
		return this.generateJwtTokens(jwtPayload);
	}

	private async generateJwtTokens(payloadBody: JwtPayloadBody) {
		const accessTokenOptions: JwtSignOptions = {
			expiresIn: this.jwtConfig.ACCESS_TOKEN_EXPIRES_IN,
			secret: this.jwtConfig.ACCESS_TOKEN_SECRET,
		};

		const refreshTokenOptions: JwtSignOptions = {
			expiresIn: this.jwtConfig.REFRESH_TOKEN_EXPIRES_IN,
			secret: this.jwtConfig.REFRESH_TOKEN_SECRET,
		};

		const [access_token, refresh_token] = await Promise.all([
			this.jwtService.sign(payloadBody, accessTokenOptions),
			this.jwtService.sign(payloadBody, refreshTokenOptions),
		]);

		return { access_token, refresh_token };
	}
}
