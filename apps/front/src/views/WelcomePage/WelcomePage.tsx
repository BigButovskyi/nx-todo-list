import { Stack, styled, Typography } from '@mui/material';
import { SignInForm } from '../../components/SignIn/SignInForm';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { checkIsLoggedIn } from '../../utils/local-storage';
import { AppRoutes, AuthRoutes } from '../../appRoutes';
import React, { useEffect } from 'react';

const StyledStack = styled(Stack)`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
`;

export const WelcomePage = (): JSX.Element => {
	const navigate = useNavigate();
	useEffect(() => {
		const isLoggedIn = checkIsLoggedIn();
		if (isLoggedIn) navigate(AppRoutes.Dashboard);
	}, []);

	return (
		<StyledStack direction={'column'} spacing={5}>
			<Typography variant={'h2'} align={'center'}>
				Welcome!
			</Typography>
			<Routes>
				<Route path={AuthRoutes.SignIn} element={<SignInForm />} />
				<Route path={AuthRoutes.SignUp} element={<SignUpForm />} />
			</Routes>
		</StyledStack>
	);
};
