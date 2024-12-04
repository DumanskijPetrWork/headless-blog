const qetQueryUrl = (rawUrl, params) => {
	const url = new URL(rawUrl);

	for (const [param, value] of Object.entries(params)) {
		url.searchParams.set(param, value);
	}

	return url.href;
};

export default qetQueryUrl;
