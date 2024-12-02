import Image from 'next/image';
import styles from './card.module.scss';

const Card = () => (
	<div className={styles.card}>
		<div className='card__image-wrap'>
			<div className='card__image'>
				<Image src='' alt='' />
			</div>
		</div>
	</div>
);

export default Card;
