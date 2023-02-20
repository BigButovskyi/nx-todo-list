import { IsDate, IsEnum, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Task, TaskPriority, TaskStatus } from '@app/shared-types';

export class CreateTaskDto implements Task {
	@ApiProperty()
	@IsString()
	title: string;

	@ApiProperty()
	@IsString()
	description: string;

	@ApiProperty({ enum: TaskStatus })
	@IsEnum(TaskStatus)
	status: TaskStatus;

	@ApiProperty({ enum: TaskPriority })
	@IsEnum(TaskPriority)
	priority: TaskPriority;

	@ApiProperty()
	@IsDate()
	@Type(() => Date)
	dueDate: Date;
}
