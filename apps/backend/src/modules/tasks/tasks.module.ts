import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskEntity } from '../../database/typeOrm/entities';

@Module({
	imports: [TypeOrmModule.forFeature([TaskEntity])],
	controllers: [TasksController],
	providers: [TasksService],
})
export class TasksModule {}
