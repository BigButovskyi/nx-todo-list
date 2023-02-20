import { Request, Response } from 'express';
import { Controller, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { UserLoginDto } from './auth/dto/user-login.dto';
import { JwtRefreshAuthGuard } from './auth/guards/jwt-refresh-auth.guard';
import { JWT_COOKIE_ACCESS_TOKEN, JWT_COOKIE_REFRESH_TOKEN } from './auth/consts';
import { JwtAuthGuard, LocalAuthGuard } from './auth/guards';
import { UserEntity } from './database/typeOrm/entities';
import { RequestWithUserInfo } from './types/request.types';

@Controller()
export class AppController {
	constructor(private authService: AuthService) {}

	@ApiBody({ description: 'username and password for login', type: UserLoginDto })
	@UseGuards(LocalAuthGuard)
	@HttpCode(HttpStatus.OK)
	@Post('auth/login')
	async login(@Req() req: Request, @Res() res: Response) {
		const { access_token, refresh_token } = await this.authService.login(req.user as UserEntity);
		res.cookie(JWT_COOKIE_ACCESS_TOKEN, access_token, { httpOnly: true });
		res.cookie(JWT_COOKIE_REFRESH_TOKEN, refresh_token, { httpOnly: true });
		res.send();
	}

	@Post('auth/logout')
	logout(@Res() res: Response) {
		res.clearCookie(JWT_COOKIE_ACCESS_TOKEN);
		res.clearCookie(JWT_COOKIE_REFRESH_TOKEN);
		res.send();
	}

	@ApiBearerAuth()
	@UseGuards(JwtRefreshAuthGuard)
	@Get('auth/refresh-tokens')
	async refreshTokens(@Req() req: RequestWithUserInfo, @Res() res: Response) {
		const { access_token, refresh_token } = await this.authService.refreshTokens(req.user);
		res.cookie(JWT_COOKIE_ACCESS_TOKEN, access_token, { httpOnly: true });
		res.cookie(JWT_COOKIE_REFRESH_TOKEN, refresh_token, { httpOnly: true });
		res.send();
	}

	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard)
	@Get('profile')
	getProfile(@Req() req: RequestWithUserInfo) {
		return req.user;
	}
}
