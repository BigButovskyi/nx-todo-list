export interface User {
	fullname: string;
	username: string;
	password: string;
	roles: UserRoles[];
}

export enum UserRoles {
	Admin = 'Admin',
	Developer = 'Developer',
	Client = 'Client',
}

export interface RequestUserInfo extends Pick<User, 'username' | 'roles'> {
	userId: string;
}
