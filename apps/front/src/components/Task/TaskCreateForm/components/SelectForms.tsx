import { FC } from 'react';
import { Stack, styled } from '@mui/material';
import { Select } from '../../../design';
import { TaskPriorityToSelectItemList, TaskStatusToSelectItemList } from './consts';

const StyledStack = styled(Stack)`
	width: 100%;
`;

interface SelectFormsProps {
	onFormChange: (...args: any[]) => void;
	required?: boolean;
}

export const SelectForms: FC<SelectFormsProps> = ({ onFormChange, required }) => {
	return (
		<StyledStack direction={'row'} spacing={1}>
			<Select
				required={required}
				label={'Status'}
				size={'small'}
				itemProps={TaskStatusToSelectItemList}
				fullWidth
				isItemLabelCapitalized
				onChange={v => onFormChange('status', v)}
			/>
			<Select
				required={required}
				label={'Priority'}
				size={'small'}
				itemProps={TaskPriorityToSelectItemList}
				fullWidth
				isItemLabelCapitalized
				onChange={v => onFormChange('priority', v)}
			/>
		</StyledStack>
	);
};
