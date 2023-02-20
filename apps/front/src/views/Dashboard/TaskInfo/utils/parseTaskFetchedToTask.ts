import { TaskFetched } from '../TaskInfo';
import { Task } from '@app/shared-types';
import { parseDateFromString } from '../../../../utils';

export default function (tasks: TaskFetched[]): Task[] {
	return (tasks || []).reduce((prevV, task) => {
		const dueDate = parseDateFromString(task.dueDate);
		const parsedTask = { ...task, dueDate };
		prevV.push(parsedTask);

		return prevV;
	}, [] as Task[]);
}
