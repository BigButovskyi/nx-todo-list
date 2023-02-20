import { HttpMethod } from '@app/shared-types';

const URL = process.env.NX_REACT_APP_BACKEND_URL || '';

const getFetchOptions = (method: HttpMethod, body?: unknown): RequestInit => {
	let fetchOptions: RequestInit = {};
	switch (method) {
		case HttpMethod.GET:
			fetchOptions = {
				method: HttpMethod.GET,
			};
			break;
		case HttpMethod.POST:
			if (!body) throw new Error('for post method fetch body should be set');

			fetchOptions = {
				method: HttpMethod.POST,
				body: JSON.stringify(body),
				headers: {
					'Access-Control-Allow-Origin': URL,
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
			};
			break;
	}
	fetchOptions['credentials'] = 'include'; // for using cookies

	return fetchOptions;
};

const customFetch = async (path: string, method: HttpMethod, body?: unknown) => {
	if (!path) throw new Error('path is not set for sending request');

	const fetchOptions = getFetchOptions(method, body);

	try {
		const result = await fetch(`${URL}/${path}`, fetchOptions);
		return await result.json();
	} catch (e) {
		console.error((e as Error).message);
	}
};

export const getRequest = async (path: string) => {
	return customFetch(path, HttpMethod.GET);
};
export const postRequest = async (path: string, body: unknown) => {
	return customFetch(path, HttpMethod.POST, body);
};
