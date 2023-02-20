import { StatusCounterMapped } from '../components/Task';
import { Task, TaskPriority, TaskStatus } from '@app/shared-types';
import { theme } from '../theme/custom-theme';

export const mockTaskStatuesAmounts: StatusCounterMapped[] = [
	{
		status: TaskStatus.ToDo,
		label: 'to do',
		amount: 2,
		color: theme.palette.error.main,
	},
	{
		status: TaskStatus.InProgress,
		label: 'in progress',
		amount: 10,
		color: theme.palette.primary.main,
	},
	{
		status: TaskStatus.Completed,
		label: 'completed',
		amount: 3,
		color: theme.palette.success.main,
	},
];

export const mockTaskList: Task[] = [
	{
		status: TaskStatus.ToDo,
		title: 'first task',
		description:
			'A wiki (/ˈwɪki/ (listen) WIK-ee) is an online hypertext publication collaboratively edited and managed by its own audience, using a web browser. A typical wiki contains multiple pages for the subjects or scope of the project, and could be either open to the public or limited to use within an organization for maintaining its internal knowledge base.',
		dueDate: new Date('2019-01-01'),
		priority: TaskPriority.Medium,
	},
	{
		status: TaskStatus.InProgress,
		title: 'second task',
		description:
			'Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other web-based systems such as blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users',
		dueDate: new Date('2019-01-01'),
		priority: TaskPriority.Medium,
	},
	{
		status: TaskStatus.InProgress,
		title: 'third task',
		description:
			'Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other web-based systems such as blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users',
		dueDate: new Date('2019-01-01'),
		priority: TaskPriority.Medium,
	},
];
