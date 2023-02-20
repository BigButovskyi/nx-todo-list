import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker as DatePickerMui, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { StandardTextFieldProps } from '@mui/material/TextField/TextField';

interface DatePickerProps extends Pick<StandardTextFieldProps, 'size' | 'sx'> {
	label?: string;
	onChange?: (date: Date | null) => void;
	value?: Date;
	required?: boolean;
	disabled?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
	required,
	disabled,
	onChange,
	value = null,
	label,
	size,
	sx,
}) => {
	const [date, setDate] = useState(value);

	const handleChange = date => {
		onChange?.(date);
		setDate(date);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePickerMui
				label={label}
				inputFormat={'dd.MM.yyyy'}
				onChange={handleChange}
				value={date}
				renderInput={params => <TextField required={required} sx={sx} size={size} {...params} />}
				disabled={disabled}
			/>
		</LocalizationProvider>
	);
};
