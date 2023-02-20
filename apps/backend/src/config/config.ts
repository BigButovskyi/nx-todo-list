import { EnvConfig } from './types';

export default (): EnvConfig => ({
	jwt: {
		ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_SECRET,
		ACCESS_TOKEN_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN,
		REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_SECRET,
		REFRESH_TOKEN_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
	},
	db: {
		typeorm: {
			HOST: process.env.TYPEORM_HOST,
			PORT: parseInt(process.env.TYPEORM_PORT),
			USERNAME: process.env.TYPEORM_USERNAME,
			PASSWORD: process.env.TYPEORM_PASSWORD,
			DB_NAME: process.env.TYPEORM_DB_NAME,
		},
	},
});
