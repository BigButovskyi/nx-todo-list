import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TasksModule, UsersModule } from './modules';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [DatabaseModule, AuthModule, TasksModule, UsersModule],
	controllers: [AppController],
})
export class AppModule {}
