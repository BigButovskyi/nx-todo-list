import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
	imports: [
		ConfigModule.forRoot({
			// envFilePath: ['./src/config/jwt.env'], for loading only env files
			load: [config],
		}),
	],
	exports: [ConfigModule],
})
export class EnvironmentConfigModule {}
