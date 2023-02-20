import React, { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkIsLoggedIn } from '../utils/local-storage';
import { AppRoutes } from '../appRoutes';

export const withAuth =
	(Component: FunctionComponent) =>
	({ ...props }) => {
		const navigate = useNavigate();
		useEffect(() => {
			const isLoggedIn = checkIsLoggedIn();
			if (!isLoggedIn) navigate(AppRoutes.Welcome);
		}, []);

		return <Component {...props} />;
	};
