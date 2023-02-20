import { TextField } from '@mui/material';
import React, { ChangeEventHandler, FC } from 'react';
import { SignUpData } from '../../SignUpForm';

interface UsernameField {
	handleChange: (name: keyof SignUpData) => ChangeEventHandler;
}

export const UsernameField: FC<UsernameField> = ({ handleChange }) => {
	return (
		<TextField label={'Username'} onChange={handleChange('username')} required>
			Username
		</TextField>
	);
};
