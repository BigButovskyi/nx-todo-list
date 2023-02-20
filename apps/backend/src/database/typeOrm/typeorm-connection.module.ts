import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity, UserEntity } from './entities';
import { ConfigService } from '@nestjs/config';
import { DbConfig, EnvConfig, EnvironmentConfigModule, TypeOrmConfig } from '../../config';

@Module({
	imports: [
		EnvironmentConfigModule,
		TypeOrmModule.forRootAsync({
			imports: [EnvironmentConfigModule],
			useFactory: (configService: ConfigService<EnvConfig>) => {
				const typeormConfig: TypeOrmConfig = configService.get<DbConfig>('db').typeorm;
				return {
					type: 'postgres',
					host: typeormConfig.HOST,
					port: typeormConfig.PORT,
					username: typeormConfig.USERNAME,
					password: typeormConfig.PASSWORD,
					database: typeormConfig.DB_NAME,
					synchronize: true, //!!! only for development, if prod then remove
					logging: ['error'], //logs only errors in typeorm
					entities: [TaskEntity, UserEntity],
					// entityPrefix: 'my_prefix_',
					migrations: [],
					// subscribers: [], //subscribers to events like inserting, updating, removing, etc.
				};
			},
			inject: [ConfigService],
		}),
	],
})
export class TypeOrmConnectionModule {}
