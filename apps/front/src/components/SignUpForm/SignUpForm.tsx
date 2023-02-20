import React, { useCallback, useState } from 'react';
import { Button, Grid, Stack, styled, Typography } from '@mui/material';
import { SignUpFields } from './SignUpFields/SignUpFields';

const StyledStack = styled(Stack)`
	background-color: ${({ theme }) => theme.palette.background.paper};
	padding: 2rem 3rem 2rem 3rem;
	border-radius: 10px;
`;

export interface SignUpData {
	username: string;
	password: string;
	passwordConfirm: string;
	firstname: string;
	lastname: string;
}

export const SignUpForm = (): JSX.Element => {
	const [signInData, setSignInData] = useState<SignUpData>({
		username: '',
		password: '',
		passwordConfirm: '',
		firstname: '',
		lastname: '',
	});

	const updateSignUpData = (name: keyof SignUpData) => {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const state = e.target.value;
			setSignInData(prevState => ({ ...prevState, ...{ [name]: state } }));
		};
	};

	const handleSubmit = useCallback(
		e => {
			e.preventDefault();
			console.log(signInData);
		},
		[signInData],
	);
	return (
		<Grid container component={'form'} onSubmit={handleSubmit} justifyContent={'center'}>
			<Grid item xs={11} sm={8} md={6} lg={4}>
				<StyledStack spacing={2}>
					<Typography variant={'body1'}>Join, to-do task community</Typography>
					<SignUpFields updateSignUpData={updateSignUpData} />
					<Button variant={'contained'} color={'info'} type={'submit'}>
						Sign Up
					</Button>
				</StyledStack>
			</Grid>
		</Grid>
	);
};
