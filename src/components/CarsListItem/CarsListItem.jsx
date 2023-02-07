import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatPrice, formatNumber } from '../../utils/numbers';

import styles from './CarsListItem.module.scss';


const CarsListItem = ({ type, car }) => {

	if (!car._id) {
		return null;
	}

	if (type === 'flat') {
		return (
			<div className={styles.carItemFlat}>

				<Link to={`/cars/${car._id}`} className={styles.carItemFlatLink}>

					<div className={styles.carItemFlatImg}>
						<img loading="lazy" alt={`${car.title}, ${car.year}&bsp;г.`} src={process.env.PUBLIC_URL + '/assets/cars/car1.jpg'} />
					</div>

					<div className={styles.carItemFlatContent}>
						<div className={styles.carItemFlatCity}>{car.city}</div>

						<div className={styles.carItemFlatTitle}>{car.title}, {car.year}&bsp;г.</div>

						<div className={styles.carItemFlatPrice}>{formatPrice(car.price)}</div>

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
							<Link to={`/cars/${car._id}`}>{car.title}, {car.year}&bsp;г.</Link>
						</div>

						<div className={styles.carItemListPrice}>
							<span>{formatPrice(car.price)}</span>
						</div>

					</div>

					<div className={styles.carItemListThumb}>
						<div className={styles.carItemListImg} >
							<Link to={`/cars/${car._id}`}>
								<img loading="lazy" alt={`${car.title}, ${car.year}&bsp;г.`} title={`${car.title}, ${car.year}&bsp;г.`} src={process.env.PUBLIC_URL + '/assets/cars/car1.jpg'} />
							</Link>
						</div>

					</div>

					<div className={styles.carItemListContent}>

						<div className={styles.carItemListDesktopInfo}>
							<div className={styles.carItemListTitle}>
								<Link to={`/cars/${car._id}`}>{car.title} <span> {car.year}&nbsp;г</span></Link>
							</div>
						</div>


						<div className={styles.carItemListSummary}>

							<div className={styles.carItemListSummaryBlock}>

								<div>{car.engineVolume.toFixed(1)} л&thinsp;/&thinsp;{car.enginePower} л.с&thinsp;/&thinsp;Бензин</div>
								<div>Автомат</div>
								<div>Седан</div>

							</div>

							<div className={styles.carItemListSummaryBlock}>
								<div>Передний</div>
								<div>Синий</div>
								<div className={styles.carItemListSummaryMileage}>{formatNumber(car.mileage)}&nbsp;км</div>
							</div>

						</div>

						<div className={styles.carItemListCity}>
							<span>{car.city}</span>
						</div>

					</div>

					<div className={`${styles.carItemListPrice} ${styles.hideXS}`}>
						<span>{formatPrice(car.price)}</span>
					</div>

					<div className={styles.carItemListYear}>{car.year}</div>

					<div className={styles.carItemListMileage}>{formatNumber(car.mileage)}&nbsp;км</div>

				</div>
			</div >
		);
	}

	return null;

};

CarsListItem.defaultProps = {
	type: 'list',
	car: {}
};

CarsListItem.propTypes = {
	type: PropTypes.oneOf(['list', 'flat']),
	car: PropTypes.object.isRequired
};

export { CarsListItem };