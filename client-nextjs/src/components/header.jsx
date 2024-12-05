import Link from 'next/link';

const Header = () => (
	<header className='pt-80 pb-80'>
		<div className='container'>
			<Link href={'/'}>
				<div className='h1'>Headless Blog</div>
			</Link>
		</div>
	</header>
);

export default Header;
