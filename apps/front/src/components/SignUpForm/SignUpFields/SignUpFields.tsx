import { ChangeEventHandler, FC } from 'react';
import { FullNameFields, PasswordsFields, UsernameField } from './fields';
import { SignUpData } from '../SignUpForm';

interface SignUpFieldsProps {
	updateSignUpData: (name: keyof SignUpData) => ChangeEventHandler;
}

export const SignUpFields: FC<SignUpFieldsProps> = ({ updateSignUpData }) => (
	<>
		<FullNameFields handleChange={updateSignUpData} />
		<UsernameField handleChange={updateSignUpData} />
		<PasswordsFields handleChange={updateSignUpData} />
	</>
);
