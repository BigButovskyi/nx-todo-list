import { FC, useMemo, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select as SelectMui } from '@mui/material';
import { SelectProps as SelectPropsMui } from '@mui/material/Select/Select';
import { MenuItemTypeMap } from '@mui/material/MenuItem/MenuItem';
import { capitalize, isNumber } from 'lodash';

const createSelectItems = (itemsProps: MenuItemProps[], isItemLabelCapitalized) => {
	return itemsProps.map(({ label, value, selected }) => {
		const capitalizedLabel = isItemLabelCapitalized && !isNumber(label) ? capitalize(label) : label;
		return (
			<MenuItem key={value} value={value} selected={selected}>
				{capitalizedLabel}
			</MenuItem>
		);
	});
};

export interface MenuItemProps extends Pick<MenuItemTypeMap['props'], 'selected'> {
	value: string | number;
	label: string | number;
}

interface SelectProps extends SelectPropsMui {
	fullWidth?: boolean;
	inputLabelId?: string;
	itemProps: MenuItemProps[];
	isItemLabelCapitalized?: boolean;
	onChange: (v) => void;
}

export const Select: FC<SelectProps> = ({
	isItemLabelCapitalized,
	onChange,
	inputLabelId,
	fullWidth,
	itemProps,
	required,
	...props
}) => {
	const { label, size } = props;
	const [value, setValue] = useState('');
	const menuItems = useMemo(() => createSelectItems(itemProps, isItemLabelCapitalized), [itemProps]);

	const handleChange = e => {
		const { value } = e.target;
		onChange?.(value);
		setValue(value);
	};

	return (
		<FormControl required={required} size={size} fullWidth={fullWidth}>
			<InputLabel id={inputLabelId}>{label}</InputLabel>
			<SelectMui value={value} onChange={handleChange} {...props}>
				{menuItems}
			</SelectMui>
		</FormControl>
	);
};
