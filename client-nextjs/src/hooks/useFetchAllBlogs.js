import apiQuery from '@/queries/api-query';

const path = 'blogs';

const useFetchAllBlogs = async (slug) => {
	const { data } = await apiQuery(path, {
		populate: '*',
	});

	return data;
};

export default useFetchAllBlogs;
