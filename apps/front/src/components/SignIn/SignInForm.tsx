import React, { useCallback, useState } from 'react';
import { Grid, Stack, styled, TextField, Typography } from '@mui/material';
import { allPropsAreSet } from '../../utils';
import login from '../../requests/login';
import { Snackbar } from '../design/Snackbar';
import { LoadingButton } from '../design/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../appRoutes';
import { logInLocalstorage } from '../../utils/local-storage';

const StyledStack = styled(Stack)`
	background-color: ${({ theme }) => theme.palette.background.paper};
	padding: 2rem 3rem 2rem 3rem;
	border-radius: 10px;
`;

interface SignInData {
	username: string;
	password: string;
}

export const SignInForm = (): JSX.Element => {
	const navigate = useNavigate();
	const { isLoading, fetchLogin, error } = login();

	const [signInData, setSignInData] = useState<SignInData>({ username: '', password: '' });

	const updateSignInData = (name: keyof SignInData) => {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const state = e.target.value;
			setSignInData(prevState => ({ ...prevState, ...{ [name]: state } }));
		};
	};

	const handleSubmit = useCallback(
		async e => {
			e.preventDefault();
			if (allPropsAreSet(signInData)) {
				const { isLoggedIn } = await fetchLogin(signInData);
				if (isLoggedIn) {
					logInLocalstorage();
					navigate(AppRoutes.Dashboard);
				}
			}
		},
		[signInData, error],
	);

	return (
		<Grid container component={'form'} onSubmit={handleSubmit} justifyContent={'center'}>
			<Grid item xs={11} sm={8} md={6} lg={4}>
				<StyledStack spacing={2}>
					<Typography variant={'body1'}>Please, login to proceed</Typography>
					<TextField disabled={isLoading} label={'Username'} onChange={updateSignInData('username')} required>
						Username
					</TextField>
					<TextField
						disabled={isLoading}
						type={'password'}
						label={'Password'}
						onChange={updateSignInData('password')}
						required
					>
						Password
					</TextField>
					<LoadingButton isLoading={isLoading} label={'Sign In'} buttonType={'submit'} />
				</StyledStack>
				{error && <Snackbar message={error} type={'error'} isOpen />}
			</Grid>
		</Grid>
	);
};
