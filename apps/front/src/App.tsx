import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/custom-theme';
import { WelcomePage } from './views/WelcomePage/WelcomePage';
import Dashboard from './views/Dashboard/Dashboard';
import { AppRoutes } from './appRoutes';
import { NotFoundPage } from './views/404Page/404Page';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path={AppRoutes.Welcome} element={<WelcomePage />} />
				<Route path={AppRoutes.Dashboard} element={<Dashboard />} />
				<Route path={'*'} element={<NotFoundPage />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
