import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseUUIDPipe,
	Patch,
	Post,
	Res,
	UseFilters,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { EntityNotFoundExceptionFilter } from '../../common/exceptions';

@ApiTags('tasks')
@Controller('tasks')
@UseFilters(EntityNotFoundExceptionFilter)
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Get()
	findAll() {
		return this.tasksService.findAll();
	}

	@Post()
	create(@Body() createTaskDto: CreateTaskDto) {
		return this.tasksService.create(createTaskDto);
	}

	@Get(':uuid')
	findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
		return this.tasksService.findOneById(uuid);
	}

	@Patch(':uuid')
	@HttpCode(HttpStatus.OK)
	async update(
		@Param('uuid', ParseUUIDPipe) uuid: string,
		@Body() updateTaskDto: UpdateTaskDto,
		@Res() res: Response,
	) {
		await this.tasksService.updateById(uuid, updateTaskDto);
		return res.send();
	}

	@Delete(':uuid')
	async remove(@Param('uuid', ParseUUIDPipe) uuid: string, @Res() res: Response) {
		await this.tasksService.remove(uuid);
		return res.send();
	}
}
