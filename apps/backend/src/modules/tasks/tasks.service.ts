import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from '../../database/typeOrm/entities';

@Injectable()
export class TasksService {
	constructor(@InjectRepository(TaskEntity) private taskRepository: Repository<TaskEntity>) {}

	async create({ title, description, dueDate, status, priority }: CreateTaskDto) {
		const task = new TaskEntity();
		task.title = title;
		task.description = description;
		task.dueDate = dueDate;
		task.status = status;
		task.priority = priority;

		return await this.taskRepository.save(task);
	}

	findAll() {
		return this.taskRepository.find();
	}

	async findOneById(uuid: string) {
		return await this.taskRepository.findOneBy({ id: uuid });
	}

	async updateById(uuid: string, updateTaskDto: UpdateTaskDto) {
		const isTaskExists = await this.taskRepository.exist({ where: { id: uuid } });
		if (!isTaskExists) {
			this.throwTaskNotFound();
		}

		return await this.taskRepository.update({ id: uuid }, updateTaskDto);
	}

	async remove(uuid: string) {
		const result = await this.taskRepository.delete(uuid);
		if (!result.affected) {
			this.throwTaskNotFound();
		}
		return result;
	}

	private throwTaskNotFound() {
		throw new NotFoundException('task not found');
	}
}
