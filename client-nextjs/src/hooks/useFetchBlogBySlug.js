import apiQuery from '@/queries/api-query';

const path = 'blogs';

const useFetchBlogBySlug = async (slug) => {
	const { data } = await apiQuery(path, {
		populate: '*',
		'filters[slug][$eq]': slug,
	});

	return data.length ? data.at(0) : null;
};

export default useFetchBlogBySlug;
