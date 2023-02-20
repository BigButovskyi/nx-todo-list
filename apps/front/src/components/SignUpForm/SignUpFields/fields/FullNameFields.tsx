import { Stack, TextField } from '@mui/material';
import { ChangeEventHandler, FC } from 'react';
import { SignUpData } from '../../SignUpForm';

interface FullNameFieldsProps {
	handleChange: (name: keyof SignUpData) => ChangeEventHandler;
}

export const FullNameFields: FC<FullNameFieldsProps> = ({ handleChange }) => {
	return (
		<Stack direction={'row'} spacing={1}>
			<TextField type={'text'} label={'Firstname'} onChange={handleChange('password')} required>
				Firstname
			</TextField>
			<TextField type={'text'} label={'Lastname'} onChange={handleChange('passwordConfirm')} required>
				Lastname
			</TextField>
		</Stack>
	);
};
