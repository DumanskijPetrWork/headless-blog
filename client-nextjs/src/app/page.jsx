import { IconTypes } from '@/components/button/button';
import Card from '@/components/card/card';
import CONFIG from '@/config';
import useFetchBlogs from '@/hooks/useFetchBlogs';

const Home = async () => {
	const [featuredBlogs, blogs] = await useFetchBlogs();

	return (
		<div className='container pb-80'>
			{featuredBlogs.map(
				({
					documentId,
					category,
					title,
					summary,
					featuredImage,
					slug,
				}) => (
					<Card
						className='mb-30'
						key={documentId}
						label={category}
						title={title}
						summary={summary}
						imgSrc={CONFIG.server + featuredImage.url}
						imgAlt='Featured Image'
						href={'/' + slug}
						btnIcon={IconTypes.ARROW_RIGHT}
					/>
				)
			)}
			<div className='row'>
				{blogs.map(
					({
						documentId,
						category,
						title,
						summary,
						thumbnail,
						slug,
					}) => (
						<div className='col col_4 m-mw-100' key={documentId}>
							<Card
								className='mb-30'
								label={category}
								title={title}
								summary={summary}
								imgSrc={CONFIG.server + thumbnail.url}
								imgAlt='Thumbnail'
								href={'/' + slug}
								btnIcon={IconTypes.ARROW_RIGHT}
							/>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Home;
