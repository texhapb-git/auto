import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../utils/price';

import styles from './CarListItem.module.scss';


const CarListItem = ({ type }) => {

	const price = 3450000;
	if (type === 'flat') {
		return (
			<div className={styles.carItemFlat}>

				<Link to={'/cars/222'} className={styles.carItemFlatLink}>

					<div className={styles.carItemFlatImg}>
						<img loading="lazy" alt="Skoda Octavia, 4 поколение (A8), 2022&nbsp;г." src={process.env.PUBLIC_URL + '/assets/cars/car1.jpg'} />
					</div>

					<div className={styles.carItemFlatContent}>
						<div className={styles.carItemFlatCity}>г.&nbsp;Москва</div>

						<div className={styles.carItemFlatTitle}>Skoda Octavia, 4 поколение (A8), 2022&nbsp;г.</div>

						<div className={styles.carItemFlatPrice}>{formatPrice(price)} ₽</div>

					</div>
				</Link>
			</div>
		);
	}

	if (type === 'list') {
		return (
			<div className={styles.carItemFlat}>

				<Link to={'/cars/222'} className={styles.carItemFlatLink}>

					<div className={styles.carItemFlatImg}>
						<img loading="lazy" alt="Skoda Octavia, 4 поколение (A8), 2022&nbsp;г." src={process.env.PUBLIC_URL + '/assets/cars/car1.jpg'} />
					</div>

					<div className={styles.carItemFlatContent}>
						<div className={styles.carItemFlatCity}>г.&nbsp;Москва</div>

						<div className={styles.carItemFlatTitle}>Skoda Octavia, 4 поколение (A8), 2022&nbsp;г.</div>

						<div className={styles.carItemFlatPrice}>{formatPrice(price)} ₽</div>

					</div>
				</Link>
			</div>
		);
	}

	return null;

};

CarListItem.defaultProps = {
	type: 'list',
};

CarListItem.propTypes = {
	type: PropTypes.oneOf(['list', 'flat'])
};

export { CarListItem };