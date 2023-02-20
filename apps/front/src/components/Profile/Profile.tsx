import { FC } from 'react';
import { Avatar, Box, Button, styled, Typography } from '@mui/material';
import { capitalize } from 'lodash';
import { logOutLocalStorage } from '../../utils/local-storage';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, AuthRoutes } from '../../appRoutes';
import { postRequest } from '../../requests/customFetch';

const StyledBox = styled(Box)`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

interface ProfileProps {
	name: string;
}

export const Profile: FC<ProfileProps> = ({ name }) => {
	const capitalizedName = capitalize(name);
	const avatarFirstLetter = name.charAt(0);
	const navigate = useNavigate();

	const handleLogOut = async () => {
		logOutLocalStorage();
		await postRequest('auth/logout', {});
		navigate(AppRoutes.Home + AuthRoutes.SignIn);
	};

	return (
		<StyledBox>
			<Avatar alt="profile-name">{avatarFirstLetter}</Avatar>
			<Typography variant={'h6'}>Welcome, {capitalizedName}</Typography>
			<Typography sx={{ fontWeight: '300' }} variant={'body2'}>
				This is your personal tasks manager
			</Typography>
			<Button onClick={handleLogOut} color={'error'} variant={'text'}>
				Log out
			</Button>
		</StyledBox>
	);
};
