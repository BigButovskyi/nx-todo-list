import { Box, Button, CircularProgress } from '@mui/material';
import { FC } from 'react';

interface LoadingButtonProps {
	isLoading?: boolean;
	label: string;
	buttonType?: 'submit' | 'button' | 'reset';
	buttonColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	progressSize?: number;
	loadingType?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
	onChange?: () => void;
}

export const LoadingButton: FC<LoadingButtonProps> = ({
	label,
	isLoading,
	progressSize = 24,
	buttonColor = 'success',
	loadingType = 'success',
	onChange,
	buttonType = 'button',
}) => {
	return (
		<Box sx={{ m: 1, position: 'relative' }}>
			<Button
				variant="contained"
				color={buttonColor}
				sx={{ width: '100%' }}
				onChange={onChange}
				disabled={isLoading}
				type={buttonType}
			>
				{label}
			</Button>
			{isLoading && (
				<CircularProgress
					size={progressSize}
					color={loadingType}
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						marginTop: '-12px',
						marginLeft: '-12px',
					}}
				/>
			)}
		</Box>
	);
};
