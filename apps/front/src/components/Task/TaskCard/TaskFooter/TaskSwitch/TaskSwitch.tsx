import React from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

interface TaskSwitchProps {
	label: string;
	checked: boolean;
	onChange: React.ChangeEventHandler;
}

export const TaskSwitch: React.FC<TaskSwitchProps> = ({ label, onChange, checked }) => {
	return (
		<FormGroup>
			<FormControlLabel
				control={<Switch onChange={onChange} checked={checked} color={'primary'} />}
				label={label}
			/>
		</FormGroup>
	);
};
