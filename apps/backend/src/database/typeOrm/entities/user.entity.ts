import { User, UserRoles } from '@app/shared-types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity implements User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	fullname: string;

	@Column()
	username: string;

	@Column()
	password: string;

	@Column({ type: 'enum', array: true, enum: UserRoles, default: [UserRoles.Client] })
	roles: UserRoles[];
}
