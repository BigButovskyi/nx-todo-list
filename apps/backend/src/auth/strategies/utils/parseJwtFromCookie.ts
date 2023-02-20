import { Request } from 'express';
import { JwtFromRequestFunction } from 'passport-jwt';

export default function (cookieName: string): JwtFromRequestFunction {
	return function (req: Request) {
		const token = req.cookies?.[cookieName];
		if (!token) {
			return null;
		}
		return token;
	};
}
