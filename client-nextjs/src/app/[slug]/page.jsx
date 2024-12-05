import CustomMDX from '@/components/mdx';
import CONFIG from '@/config';
import getCategoryColor from '@/helpers/get-category-color';
import useFetchAllBlogs from '@/hooks/useFetchAllBlogs';
import useFetchBlogBySlug from '@/hooks/useFetchBlogBySlug';
import Image from 'next/image';
import styles from './styles.module.scss';

// Статическая генерация всех страниц при сборке
export const generateStaticParams = async () => {
	const blogs = await useFetchAllBlogs();

	return blogs.map(({ slug }) => ({ slug }));
};

const BlogDetails = async ({ params }) => {
	const { slug } = await params;
	const { category, title, content, featuredImage } =
		await useFetchBlogBySlug(slug);

	return (
		<div className='container pb-80'>
			<div className='row mb-50'>
				<div className='col col_9'>
					<div className={`h6 mb-10 c-${getCategoryColor(category)}`}>
						{category}
					</div>
					<h2>{title}</h2>
				</div>
			</div>

			<Image
				className={`${styles.featuredImage} mb-50`}
				src={CONFIG.server + featuredImage.url}
				alt='Featured Image'
				width={'1280'}
				height={'387'}
			/>

			<div className='row'>
				<div className='col col_9'>
					<CustomMDX source={content} />
				</div>
			</div>
		</div>
	);
};

export default BlogDetails;
