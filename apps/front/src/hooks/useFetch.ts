import { useEffect, useState } from 'react';
import { getRequest } from '../requests/customFetch';

export default function <ResponseType>(path: string) {
	const [data, setData] = useState<ResponseType>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>();

	const fetchData = async () => {
		try {
			const result = await getRequest(path);
			setData(result);
		} catch (e) {
			setError((e as Error).message);
		}
		setIsLoading(false);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return { isLoading, data, error };
}
