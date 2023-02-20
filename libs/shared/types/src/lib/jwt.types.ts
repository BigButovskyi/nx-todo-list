import { JwtPayload } from 'jsonwebtoken';
import { User } from './user.types';

export interface JwtPayloadBody extends JwtPayload, Pick<User, 'username' | 'roles'> {
	sub: string;
}
