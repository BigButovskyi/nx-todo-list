import { FC, useMemo } from 'react';
import { Container, Typography } from '@mui/material';
import { TaskStatuses } from '../../../components/Task';
import { formatToDescriptiveDate, getLocalWeekDay } from '../../../utils';
import { TaskList } from './TaskList/TaskList';
import useFetch from '../../../hooks/useFetch';
import { Task } from '@app/shared-types';
import convertFetchedTasksToTaskList from './utils/parseTaskFetchedToTask';
import { LoadingScreen } from '../../../components/design/LoadingScreen';

export interface TaskFetched extends Omit<Task, 'dueDate'> {
	dueDate: string;
}

export const TaskInfo: FC = () => {
	const { data: tasks, isLoading, error } = useFetch<TaskFetched[]>('tasks');

	const convertedTasks: Task[] = useMemo(() => {
		if (tasks?.length) {
			return convertFetchedTasksToTaskList(tasks);
		}
		return [];
	}, [tasks]);

	const [today, weekDayToday] = [formatToDescriptiveDate(new Date()), getLocalWeekDay(new Date())];

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<Container maxWidth={'md'}>
			<Typography variant={'h6'} align={'center'}>
				Your Task's Statuses on {`${weekDayToday}, ${today}`}
			</Typography>
			{tasks && (
				<>
					<TaskStatuses tasks={convertedTasks} />
					<TaskList tasks={convertedTasks} />
				</>
			)}
		</Container>
	);
};
