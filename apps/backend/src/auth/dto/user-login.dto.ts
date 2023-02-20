import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@app/shared-types';

export class UserLoginDto implements Pick<User, 'username' | 'password'> {
	@ApiProperty()
	@IsString()
	username: string;

	@ApiProperty()
	@IsString()
	password: string;
}
