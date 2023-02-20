import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import { Profile } from '../../components/Profile';
import { TaskCreateForm } from '../../components/Task';
import { TaskInfo } from './TaskInfo';
import { withAuth } from '../../hooks/withAuth';

const ContentGrid = styled(Grid)`
	height: 100vh;
`;

const AccountGrid = styled(Grid)`
	background-color: ${({ theme }) => theme.palette.background.paper};
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Dashboard: FC = () => {
	return (
		<Grid container>
			<ContentGrid item xs={8}>
				<TaskInfo />
			</ContentGrid>
			<AccountGrid item xs={4}>
				<Profile name={'Vlad'} />
				<TaskCreateForm />
			</AccountGrid>
		</Grid>
	);
};

export default withAuth(Dashboard);
