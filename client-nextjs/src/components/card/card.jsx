import getCategoryColor from '@/helpers/get-category-color';
import Image from 'next/image';
import Button from '../button/button';
import styles from './card.module.scss';

const Card = ({
	className = '',
	label,
	title,
	summary,
	href,
	btnIcon,
	btnLabel = 'Read More',
}) => (
	<div className={`${styles.card__wrap} ${className}`}>
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
				{label && (
					<div
						className={`${
							styles.card__label
						} h6 mb-10 c-${getCategoryColor(label)}`}
					>
						{label}
					</div>
				)}
				{title && (
					<div className={`${styles.card__title} h3 mb-20`}>
						{title}
					</div>
				)}
				{summary && (
					<p className={`${styles.card__summary} fw-600`}>
						{summary}
					</p>
				)}
				{href && (
					<Button href={href} icon={btnIcon}>
						{btnLabel}
					</Button>
				)}
			</div>
		</div>
	</div>
);

export default Card;
