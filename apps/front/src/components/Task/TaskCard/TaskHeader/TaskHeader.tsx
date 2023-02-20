import { FC } from 'react';
import { Task } from '@app/shared-types';
import { CardHeader, Chip, Stack, Typography } from '@mui/material';
import { formatToDescriptiveDate } from '../../../../utils';

type TaskHeaderProps = Pick<Task, 'title' | 'dueDate'>;

export const TaskHeader: FC<TaskHeaderProps> = ({ title, dueDate }) => {
	const taskDueDate = formatToDescriptiveDate(dueDate);

	return (
		<CardHeader
			title={
				<Stack sx={{ width: '100%' }} direction={'row'} justifyContent={'space-between'}>
					{title}
					<Chip label={<Typography variant={'body1'}>{taskDueDate}</Typography>} variant="outlined" />
				</Stack>
			}
		/>
	);
};
