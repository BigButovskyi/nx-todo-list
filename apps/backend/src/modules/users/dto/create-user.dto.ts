import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@app/shared-types';
import { Match } from '../../../common/validators';

export class CreateUserDto implements Omit<User, 'roles'> {
	@ApiProperty({ minLength: 4 })
	@IsString()
	@MinLength(4)
	fullname: string;

	@ApiProperty({ minLength: 4, maxLength: 20 })
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	username: string;

	@ApiProperty({ minLength: 8, maxLength: 20 })
	@IsString()
	@MinLength(8)
	@MaxLength(20)
	password: string;

	@ApiProperty({ description: 'passwordConfirm should be matched with password' })
	@IsString()
	@Match('password')
	passwordConfirm: string;
}
