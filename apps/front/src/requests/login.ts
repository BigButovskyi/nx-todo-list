import { useState } from 'react';
import { HttpMethod, HttpStatus } from '@app/shared-types';

const URL = process.env.NX_REACT_APP_BACKEND_URL || '';

const handleResponseError = (response: Response) => {
	const httpStatusesErrors = {
		[HttpStatus.ClientErrorUnauthorized]: 'Invalid username or password',
		default: 'There is some problem with authorization',
	};
	const responseStatus = response.status;

	return httpStatusesErrors[responseStatus] || httpStatusesErrors['default'];
};

type IsLoggedAnswer = { isLoggedIn: boolean };

export default () => {
	const [error, setError] = useState<string>();
	const [isLoading, setIsLoading] = useState(false);

	const fetchLogin = async (data: unknown): Promise<IsLoggedAnswer> => {
		const fetchOptions: RequestInit = {
			method: HttpMethod.POST,
			body: JSON.stringify(data),
			headers: {
				'Access-Control-Allow-Origin': URL,
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		};

		setIsLoading(true);
		setError('');
		try {
			const response = await fetch(`${URL}/auth/login`, fetchOptions);
			if (!response.ok) {
				const errorMessage = handleResponseError(response);
				setError(errorMessage);
				return { isLoggedIn: false };
			}

			return { isLoggedIn: true };
		} catch (e) {
			console.error('Authorization error', (e as Error).message);
			setError(`Authorization error: ${(e as Error).message}`);
			return { isLoggedIn: false };
		} finally {
			setIsLoading(false);
		}
	};

	return { error, isLoading, fetchLogin };
};
