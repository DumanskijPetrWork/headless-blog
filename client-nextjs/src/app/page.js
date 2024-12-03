import { IconTypes } from '@/components/button/button';
import Card from '@/components/card/card';

const Home = () => (
	<div className='container pb-80'>
		<Card
			className='mb-30'
			label={'Product Reviews'}
			title={
				'Class aptent taciti sociosqu ad litora torquent per conubia nostra'
			}
			summary={
				'Mauris interdum felis lacus. Praesent nulla libero, vulputate ut lorem ac, sollicitudin fringilla velit. Quisque velit elit.'
			}
			href={'#'}
			btnIcon={IconTypes.ARROW_RIGHT}
		/>
		<div className='row'>
			<div className='col col_4'>
				<Card
					label={'Product Reviews'}
					title={
						'Class aptent taciti sociosqu ad litora torquent per conubia nostra'
					}
					summary={
						'Mauris interdum felis lacus. Praesent nulla libero, vulputate ut lorem ac, sollicitudin fringilla velit. Quisque velit elit.'
					}
					href={'#'}
					btnIcon={IconTypes.ARROW_RIGHT}
				/>
			</div>
			<div className='col col_4'>
				<Card
					label={'Product Reviews'}
					title={
						'Class aptent taciti sociosqu ad litora torquent per conubia nostra'
					}
					summary={
						'Mauris interdum felis lacus. Praesent nulla libero, vulputate ut lorem ac, sollicitudin fringilla velit. Quisque velit elit.'
					}
					href={'#'}
					btnIcon={IconTypes.ARROW_RIGHT}
				/>
			</div>
			<div className='col col_4'>
				<Card
					label={'Product Reviews'}
					title={
						'Class aptent taciti sociosqu ad litora torquent per conubia nostra'
					}
					summary={
						'Mauris interdum felis lacus. Praesent nulla libero, vulputate ut lorem ac, sollicitudin fringilla velit. Quisque velit elit.'
					}
					href={'#'}
					btnIcon={IconTypes.ARROW_RIGHT}
				/>
			</div>
		</div>
	</div>
);

export default Home;
