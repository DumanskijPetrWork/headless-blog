import '@/styles/styles.scss';
import { Lato, Open_Sans } from 'next/font/google';

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
	variable: '--font-lato',
});

const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans',
});

export const metadata = {
	title: 'Headless Blog',
};

const RootLayout = ({ children }) => (
	<html lang='en'>
		<body
			className={`${openSans.className} ${openSans.variable} ${lato.variable}`}
		>
			{children}
		</body>
	</html>
);

export default RootLayout;
