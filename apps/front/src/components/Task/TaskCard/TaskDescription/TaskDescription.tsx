import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';

interface TaskDescriptionProps {
	description: string;
}

export const TaskDescription: FC<TaskDescriptionProps> = ({ description }) => {
	return (
		<CardContent>
			<Typography color={'rgba(255, 255, 255, 0.7)'} variant={'body1'}>
				{description}
			</Typography>
		</CardContent>
	);
};
