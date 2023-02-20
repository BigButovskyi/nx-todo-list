import { TaskPriority, TaskStatus } from '@app/shared-types';
import { MenuItemProps } from '../../../design';

export const TaskStatusToSelectItemList: MenuItemProps[] = [
	{
		label: 'to do',
		value: TaskStatus.ToDo,
		selected: false,
	},
	{ label: 'in progress', value: TaskStatus.InProgress, selected: false },
	{ label: 'completed', value: TaskStatus.Completed, selected: false },
];

export const TaskPriorityToSelectItemList: MenuItemProps[] = [
	{
		label: 'low',
		value: TaskPriority.Low,
		selected: false,
	},
	{
		label: 'medium',
		value: TaskPriority.Medium,
		selected: false,
	},
	{
		label: 'high',
		value: TaskPriority.High,
		selected: false,
	},
];
