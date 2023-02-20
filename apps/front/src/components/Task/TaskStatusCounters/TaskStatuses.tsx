import { FC, useMemo } from 'react';
import { Stack, styled } from '@mui/material';
import { Task } from '@app/shared-types';
import { TaskStatusCounter } from './TaskStatusCounter/TaskStatusCounter';
import { getStatusCounterMapped } from './utils';
import { StatusCounterMapped } from './TaskStatusCounter/types';

const StyledStack = styled(Stack)`
	margin: 1rem 0 2rem 0;
	width: 100%;
`;

interface TaskStatusesProps {
	tasks: Task[];
}

export const TaskStatuses: FC<TaskStatusesProps> = ({ tasks }) => {
	const statusesAmounts: StatusCounterMapped[] = useMemo(() => getStatusCounterMapped(tasks), [tasks]);
	const taskStatusCounters = statusesAmounts.map(props => <TaskStatusCounter key={props.status} {...props} />);

	return (
		<StyledStack direction={'row'} justifyContent={'center'} spacing={10}>
			{taskStatusCounters}
		</StyledStack>
	);
};
