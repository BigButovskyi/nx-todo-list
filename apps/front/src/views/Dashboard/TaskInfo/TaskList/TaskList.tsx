import { FC } from 'react';
import { Task } from '@app/shared-types';
import { Box, Stack, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { TaskCard } from '../../../../components/Task/TaskCard';

const StyledBox = styled(Box)`
	width: 100%;
	height: 70vh;
	overflow: auto; /* width */

	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */

	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 1px grey;
		border-radius: 10px;
	}

	/* Handle */

	::-webkit-scrollbar-thumb {
		background: #532828;
		border-radius: 10px;
	}

	/* Handle on hover */

	::-webkit-scrollbar-thumb:hover {
		background: #b30000;
	}
`;

const StyledStack = styled(Stack)`
	padding: 0 3rem;
	height: auto;
	box-sizing: content-box;
`;

interface TaskListProps {
	tasks: Task[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
	const taskCards = tasks.map(props => <TaskCard key={uuid()} {...props} />);
	return (
		<StyledBox>
			<StyledStack direction={'column'} spacing={3}>
				{taskCards}
			</StyledStack>
		</StyledBox>
	);
};
