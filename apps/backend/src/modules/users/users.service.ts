import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { PasswordsService } from '../passwords';
import { UserEntity } from '../../database/typeOrm/entities';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
		private passwordsService: PasswordsService,
	) {}

	async createUser(userParams: CreateUserDto) {
		const { fullname, password, username } = userParams;

		const hashedPassword = await this.passwordsService.hashPassword(password);

		const newUser = new UserEntity();
		newUser.fullname = fullname;
		newUser.username = username;
		newUser.password = hashedPassword;

		return this.userRepository.save(newUser);
	}

	async getAllUsers() {
		return this.userRepository.find();
	}

	async getUserByUserName(username: string) {
		return this.userRepository.findOneBy({ username });
	}
}
