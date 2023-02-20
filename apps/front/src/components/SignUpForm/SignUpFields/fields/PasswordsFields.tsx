import { TextField } from '@mui/material';
import React, { ChangeEventHandler, FC } from 'react';
import { SignUpData } from '../../SignUpForm';

interface UsernameField {
	handleChange: (name: keyof SignUpData) => ChangeEventHandler;
}

export const PasswordsFields: FC<UsernameField> = ({ handleChange }) => {
	return (
		<>
			<TextField type={'password'} label={'Password'} onChange={handleChange('password')} required>
				Password
			</TextField>
			<TextField type={'password'} label={'Confirm Password'} onChange={handleChange('passwordConfirm')} required>
				Password Confirm
			</TextField>
		</>
	);
};
