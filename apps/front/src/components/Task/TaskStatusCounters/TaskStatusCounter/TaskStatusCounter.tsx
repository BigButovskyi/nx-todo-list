import { FC } from 'react';
import { startCase } from 'lodash';
import { Avatar, Stack, styled, Typography } from '@mui/material';
import { theme } from '../../../../theme/custom-theme';
import { StatusCounterMapped } from './types';

const StyledTaskStatusCounter = styled(Avatar)<{ border_color: string }>`
	width: 5rem;
	height: 5rem;
	border: 3px solid ${({ border_color }) => border_color};
	background-color: transparent;
`;

type TaskStatusCounterProps = StatusCounterMapped;

export const TaskStatusCounter: FC<TaskStatusCounterProps> = ({ status, amount, color, label }) => {
	if (!color) color = theme.palette.primary.main;
	const fontColor = theme.palette.text.primary;

	const capitalizedLabel = startCase(label);

	return (
		<Stack direction={'column'} spacing={1} id={status}>
			<StyledTaskStatusCounter border_color={color}>
				<Typography color={fontColor} variant={'h4'}>
					{amount}
				</Typography>
			</StyledTaskStatusCounter>
			<Typography align={'center'} variant={'body1'}>
				{capitalizedLabel}
			</Typography>
		</Stack>
	);
};
