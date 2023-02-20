import { Stack, styled, Typography } from '@mui/material';

const StyledStack = styled(Stack)`
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

export const NotFoundPage = (): JSX.Element => {
	return (
		<StyledStack spacing={4}>
			<Typography variant={'h2'}>Oops, looks like you found falsy page</Typography>
			<Typography variant={'body1'}>In any case, you can reload previous one</Typography>
		</StyledStack>
	);
};
