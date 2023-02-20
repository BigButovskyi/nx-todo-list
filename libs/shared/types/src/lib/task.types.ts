export interface Task {
	title: string;
	description: string;
	status: TaskStatus;
	priority: TaskPriority;
	dueDate: Date;
}

export enum TaskStatus {
	ToDo = 'ToDo',
	InProgress = 'InProgress',
	Completed = 'Completed',
}

export enum TaskPriority {
	High = 'High',
	Medium = 'Medium',
	Low = 'Low',
}
