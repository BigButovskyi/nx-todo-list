import { FC } from 'react';
import { Card } from '@mui/material';
import { Task } from '@app/shared-types';
import { TaskHeader } from './TaskHeader/TaskHeader';
import { TaskDescription } from './TaskDescription/TaskDescription';
import { TaskFooter } from './TaskFooter';

export const TaskCard: FC<Task> = props => {
	return (
		<Card>
			<TaskHeader {...props} />
			<TaskDescription {...props} />
			<TaskFooter {...props} />
		</Card>
	);
};
