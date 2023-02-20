import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PasswordsModule } from '../passwords';
import { UserEntity } from '../../database/typeOrm/entities';

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity]), PasswordsModule],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}
