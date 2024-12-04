import CONFIG from '@/config';
import qetQueryUrl from '@/helpers/qet-query-url';

const requestOptions = {
	headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
};

const apiQuery = async (path, params) => {
	const url = qetQueryUrl(`${CONFIG.api}/${path}`, params);

	const response = await fetch(url, requestOptions);

	return await response.json();
};

export default apiQuery;
