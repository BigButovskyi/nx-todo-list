import { TaskStatus } from '@app/shared-types';

export interface StatusCounterMapped {
	status: TaskStatus;
	label: string;
	amount: string | number;
	color?: string;
}
