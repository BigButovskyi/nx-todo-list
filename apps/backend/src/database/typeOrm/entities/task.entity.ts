import { Task, TaskPriority, TaskStatus } from '@app/shared-types';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('tasks')
export class TaskEntity implements Task {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.ToDo })
	status: TaskStatus;

	@Column({ type: 'enum', enum: TaskPriority, default: TaskPriority.Medium })
	priority: TaskPriority;

	@Column()
	dueDate: Date;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
