import { FC, useCallback, useState } from 'react';
import { Box, Button, Stack, styled, TextField, Typography } from '@mui/material';
import { Task, TaskPriority, TaskStatus } from '@app/shared-types';
import { SelectForms } from './components/SelectForms';
import { DatePicker } from '../../design';
import { postRequest } from '../../../requests/customFetch';

const StyledStack = styled(Stack)`
	width: 100%;
	margin: 2rem 0;
	padding: 0 2rem;
`;

export const TaskCreateForm: FC = () => {
	const [title, setTitle] = useState<Task['title']>();
	const [description, setDescription] = useState<Task['description']>();
	const [dueDate, setDueDate] = useState<Task['dueDate'] | null>();
	const [status, setStatus] = useState<Task['status']>();
	const [priority, setPriority] = useState<Task['priority']>();

	const handleOnSelectFormChange = (key: keyof Pick<Task, 'status' | 'priority'>, state: unknown) => {
		switch (key) {
			case 'status':
				setStatus(state as TaskStatus);
				break;
			case 'priority':
				setPriority(state as TaskPriority);
				break;
		}
	};

	const handleSubmit = useCallback(
		async e => {
			e.preventDefault();
			if ([title, priority, status, dueDate, description].every(v => v !== undefined)) {
				const newTask = {
					title,
					priority,
					status,
					dueDate,
					description,
				};
				const res = await postRequest('tasks', newTask);
				console.log(res);
			}
		},
		[title, priority, status, dueDate, description],
	);

	return (
		<Box sx={{ width: '100%' }} component={'form'} onSubmit={handleSubmit}>
			<StyledStack spacing={2}>
				<Typography variant={'h6'}>Create A Task</Typography>
				<TextField required size={'small'} label={'Title'} onChange={e => setTitle(e.target.value)} />
				<TextField
					required
					size={'small'}
					label={'Description'}
					rows={4}
					onChange={e => setDescription(e.target.value)}
					multiline
				/>
				<DatePicker required size={'small'} label={'Due Date'} onChange={date => setDueDate(date)} />
				<SelectForms required onFormChange={handleOnSelectFormChange} />
				<Button variant={'contained'} color={'success'} type={'submit'}>
					Create Task
				</Button>
			</StyledStack>
		</Box>
	);
};
