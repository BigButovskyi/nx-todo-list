export interface JwtEnvConfig {
	ACCESS_TOKEN_SECRET: string;
	ACCESS_TOKEN_EXPIRES_IN: string;
	REFRESH_TOKEN_SECRET: string;
	REFRESH_TOKEN_EXPIRES_IN: string;
}

export interface TypeOrmConfig {
	HOST: string;
	PORT: number;
	USERNAME: string;
	PASSWORD: string;
	DB_NAME: string;
}

export interface DbConfig {
	typeorm: TypeOrmConfig;
}

export interface EnvConfig {
	jwt: JwtEnvConfig;
	db: DbConfig;
}
