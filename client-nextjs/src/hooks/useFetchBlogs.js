import apiQuery from '@/queries/api-query';

const path = 'blogs';

const useFetchBlogs = async () => {
	const [{ data: featuredBlogs }, { data: blogs }] = await Promise.all([
		apiQuery(path, {
			populate: '*',
			'filters[isFeatured][$eq]': true,
		}),
		apiQuery(path, {
			populate: '*',
			'filters[isFeatured][$eq]': false,
		}),
	]);

	return [featuredBlogs, blogs];
};

export default useFetchBlogs;
