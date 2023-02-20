import { Alert, Snackbar as SnackBarMui } from '@mui/material';
import React, { FC, useState } from 'react';
import { AlertColor } from '@mui/material/Alert/Alert';

interface SnackbarProps {
	isOpen?: boolean;
	type?: AlertColor;
	message: string;
}

export const Snackbar: FC<SnackbarProps> = ({ message, isOpen, type = 'success' }) => {
	const [openSnackbar, setOpenSnackbar] = useState(isOpen);
	const handleCloseSnackBar = () => {
		setOpenSnackbar(false);
	};
	return (
		<SnackBarMui open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
			<Alert onClose={handleCloseSnackBar} severity={type} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</SnackBarMui>
	);
};
