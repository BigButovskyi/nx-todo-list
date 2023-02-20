import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordsService {
	async comparePasswords(providedPassword: string, storedPassword: string): Promise<boolean> {
		return bcrypt.compare(providedPassword, storedPassword);
	}

	async hashPassword(password: string): Promise<string> {
		const saltRounds = 10;
		return bcrypt.hash(password, saltRounds);
	}
}
