import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../utils/numbers';

import styles from './CarListItem.module.scss';


const CarListItem = ({ type }) => {

	const price = 3450000;

	if (type === 'flat') {
		return (
			<div className={styles.carItemFlat}>

				<Link to={'/cars/222'} target="_blank" className={styles.carItemFlatLink}>

					<div className={styles.carItemFlatImg}>
						<img loading="lazy" alt="Skoda Octavia, 4 поколение (A8), 2022&nbsp;г." src={process.env.PUBLIC_URL + '/assets/cars/car1.jpg'} />
					</div>

					<div className={styles.carItemFlatContent}>
						<div className={styles.carItemFlatCity}>г.&nbsp;Москва</div>

						<div className={styles.carItemFlatTitle}>Skoda Octavia, 4 поколение (A8), 2022&nbsp;г.</div>

						<div className={styles.carItemFlatPrice}>{formatPrice(price)}</div>

					</div>
				</Link>
			</div>
		);
	}

	if (type === 'list') {
		return (
			<div className={styles.carItemListContainer}>
				<div className={styles.carItemList}>

					<div className={styles.carItemListMobileInfo}>
						<div className={styles.carItemListMobileLink}>
							<Link to={'/cars/222'} target="_blank">BMW 3 серия, 6 поколение (F3x) [рестайлинг], 2016</Link>
						</div>

						<div className={styles.carItemListPrice}>
							<span>{formatPrice(price)}</span>
						</div>

					</div>

					<div className={styles.carItemListThumb}>
						<div className={styles.carItemListImg} >
							<Link to={'/cars/222'} target="_blank">
								<img loading="lazy" alt="BMW 3 серия, 6 поколение (F3x) [рестайлинг], 2016&nbsp;г." title="BMW 3 серия, 6 поколение (F3x) [рестайлинг], 2016&nbsp;г." src={process.env.PUBLIC_URL + '/assets/cars/car1.jpg'} />
							</Link>
						</div>

					</div>

					<div className={styles.carItemListContent}>

						<div className={styles.carItemListDesktopInfo}>
							<div className={styles.carItemListTitle}>
								<Link to={'/cars/222'} target="_blank">BMW 3 серия, 6 поколение (F3x) [рестайлинг]<span>, 2016</span></Link>
							</div>
						</div>


						<div className={styles.carItemListSummary}>

							<div className={styles.carItemListSummaryBlock}>

								<div>2.0 л&thinsp;/&thinsp;400 л.с&thinsp;/&thinsp;Бензин</div>
								<div>Автомат</div>
								<div>Седан</div>

							</div>

							<div className={styles.carItemListSummaryBlock}>
								<div>Передний</div>
								<div>Синий</div>
								<div className={styles.carItemListSummaryMileage}>102&nbsp;000&nbsp;км</div>
							</div>

						</div>

						<div className={styles.carItemListCity}>
							<span>Москва</span>
						</div>

					</div>

					<div className={`${styles.carItemListPrice} ${styles.hideXS}`}>
						<span>{formatPrice(price)}</span>
					</div>

					<div className={styles.carItemListYear}>2016</div>

					<div className={styles.carItemListMileage}>102&nbsp;000&nbsp;км</div>

				</div>
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