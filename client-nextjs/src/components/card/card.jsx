import Image from 'next/image';
import Button, { IconTypes } from '../button/button';
import styles from './card.module.scss';

const Card = () => (
	<div className={styles.card__wrap}>
		<div className={styles.card}>
			<div className={styles.card__imageWrap}>
				<div className={styles.card__image}>
					<Image
						src='/thumb-grid-1.jpg'
						alt='thumbnail'
						fill={true}
					/>
				</div>
			</div>
			<div className={styles.card__content}>
				<div className={`${styles.card__label} h6 mb-10 c-orange`}>
					Product Reviews
				</div>
				<div className={`${styles.card__title} h3 mb-20`}>
					Class aptent taciti sociosqu ad litora torquent per conubia
					nostra
				</div>
				<p className={`${styles.card__summary} fw-600`}>
					Mauris interdum felis lacus. Praesent nulla libero,
					vulputate ut lorem ac, sollicitudin fringilla velit. Quisque
					velit elit.
				</p>
				<Button href='#' icon={IconTypes.ARROW_RIGHT}>
					Read More
				</Button>
			</div>
		</div>
	</div>
);

export default Card;
