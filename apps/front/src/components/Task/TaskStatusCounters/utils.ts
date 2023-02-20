import { Task, TaskStatus } from '@app/shared-types';
import { StatusCounterMapped } from './TaskStatusCounter/types';
import { theme } from '../../../theme/custom-theme';

const BASE_STATUS_COUNTER_MAPPED: StatusCounterMapped[] = [
	{
		status: TaskStatus.ToDo,
		label: 'To Do',
		amount: 0,
		color: theme.palette.error.main,
	},
	{
		status: TaskStatus.InProgress,
		label: 'In progress',
		amount: 0,
		color: theme.palette.primary.main,
	},
	{
		status: TaskStatus.Completed,
		label: 'Completed',
		amount: 0,
		color: theme.palette.success.main,
	},
];

export const getStatusCounterMapped = (tasks: Task[]): StatusCounterMapped[] => {
	const statusesAmounts = getTaskStatusesAmounts(tasks);

	return BASE_STATUS_COUNTER_MAPPED.map(statusMap => {
		const taskStatus = statusMap.status;
		statusMap.amount = statusesAmounts[taskStatus];
		return statusMap;
	});
};

const getTaskStatusesAmounts = (tasks: Task[]): Record<TaskStatus, number> => {
	const statusAmounts = {
		[TaskStatus.ToDo]: 0,
		[TaskStatus.InProgress]: 0,
		[TaskStatus.Completed]: 0,
	};

	return tasks.reduce((prevStatusAmounts, task) => {
		const taskStatus = task.status;
		prevStatusAmounts[taskStatus]++;

		return prevStatusAmounts;
	}, statusAmounts);
};
