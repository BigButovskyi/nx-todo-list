import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserRoles } from '@app/shared-types';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service';
import { RolesGuard } from '../../common/guards';
import { JwtAuthGuard } from '../../auth/guards';
import { Roles } from '../../common/custom-decorators';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post()
	createUser(@Body() userParams: CreateUserDto) {
		return this.usersService.createUser(userParams);
	}

	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRoles.Admin)
	@Get()
	getAll() {
		return this.usersService.getAllUsers();
	}
}
