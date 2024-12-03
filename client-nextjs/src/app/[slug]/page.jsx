import getCategoryColor from '@/helpers/get-category-color';
import Image from 'next/image';
import styles from './styles.module.scss';

const BlogDetails = () => (
	<div className='container pb-80'>
		<div className='row mb-50'>
			<div className='col col_9'>
				<div
					className={`h6 mb-10 c-${getCategoryColor(
						'Product Reviews'
					)}`}
				>
					{'Product Reviews'}
				</div>
				<h2>
					Class aptent taciti sociosqu ad litora torquent per conubia
					nostra
				</h2>
			</div>
		</div>

		<Image
			className={`${styles.featuredImage} mb-50`}
			src={'/featured-1.jpg'}
			alt='Featured Image'
			width={'1280'}
			height={'387'}
		/>

		<div className='row'>
			<div className='col col_9'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Deserunt, voluptas? Nobis, similique cumque! Aliquam
					nesciunt corrupti corporis magni blanditiis sed id eum
					magnam numquam dolore repudiandae, neque cupiditate
					necessitatibus, placeat alias commodi ipsum sunt vitae iure
					error? Harum eaque corporis vel debitis. Aliquam, in dolor
					quod animi doloremque corrupti! Quos nisi a fuga
					voluptatibus rerum tenetur quis! Autem, nesciunt odit. Animi
					quasi, debitis a quos aspernatur error fugit eum odio
					sapiente corrupti. Nam, eveniet. Minima cum deserunt
					recusandae atque optio.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Non, sint. Atque temporibus sequi quod ab ratione
					praesentium, aspernatur iste tempora esse excepturi.
					Quaerat, earum? Odit eos cupiditate ratione deleniti quae
					non, error nobis nisi labore voluptate assumenda autem ad
					quia dolore tempore, iure illo minima aliquam tempora est
					cum sunt?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					minima harum necessitatibus optio distinctio ipsa amet,
					autem quaerat sequi! Magnam quis tenetur totam optio
					suscipit dolores facilis tempore amet aliquid sapiente
					beatae deleniti, voluptas dolorem perspiciatis vitae
					voluptatibus aut quod?
				</p>
			</div>
		</div>
	</div>
);

export default BlogDetails;
