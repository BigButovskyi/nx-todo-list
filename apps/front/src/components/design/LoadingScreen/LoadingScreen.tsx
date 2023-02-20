import { Box, CircularProgress, styled } from '@mui/material';

const StyledBox = styled(Box)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 9999;
`;
export const LoadingScreen = () => {
	return (
		<StyledBox>
			<CircularProgress />
		</StyledBox>
	);
};
