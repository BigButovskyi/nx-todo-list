import { FC, useMemo, useState } from 'react';
import { TaskStatus } from '@app/shared-types';
import { Button, CardActions, Stack } from '@mui/material';
import { TaskSwitch } from './TaskSwitch/TaskSwitch';

interface TaskFooterProps {
	status: string;
}

export const TaskFooter: FC<TaskFooterProps> = ({ status }) => {
	const [isSwitchChecked, setIsSwitchChecked] = useState(status === TaskStatus.InProgress);
	const switchLabel = useMemo(() => (isSwitchChecked ? 'In Progress' : 'To do'), [isSwitchChecked]);

	const handleSwitchChange = e => {
		const isChecked = e.target.checked;
		setIsSwitchChecked(isChecked);
	};

	return (
		<CardActions>
			<Stack px={1} sx={{ width: '100%' }} direction={'row'} justifyContent={'space-between'}>
				<TaskSwitch checked={isSwitchChecked} label={switchLabel} onChange={handleSwitchChange} />
				<Button variant="contained" color="success">
					Mark Complete
				</Button>
			</Stack>
		</CardActions>
	);
};
