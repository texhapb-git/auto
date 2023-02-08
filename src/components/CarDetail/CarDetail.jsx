import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import { Button } from '../Button';

import { formatPrice, formatNumber } from '../../utils/numbers';
import { formatPhone } from '../../utils/phone';

import users from '../../db/users.json';

import { Avatar } from '../Avatar';

import styles from './CarDetail.module.scss';

const CarDetail = ({ car }) => {

	const owner = users.find(user => user._id === car.userId);

	const images = [
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car2.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car2.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car2.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car2.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
		{
			original: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			thumbnail: process.env.PUBLIC_URL + '/assets/cars/car1.jpg',
			loading: 'lazy'
		},
	];

	return (
		<div className={styles.carDetail}>

			<div className={styles.carDetailBack}>
				<Link to="/cars">
					<Button type="default" styleType="secondary">&#8678;&nbsp;<span>Список объявлений</span></Button>
				</Link>
			</div>

			<div className={styles.carDetailTitleContainer}>
				<div className={styles.carDetailTitle}><h1>{car.title}</h1></div>
				<div className={styles.carDetailPrice}><span>{formatPrice(car.price)}</span></div>
			</div>

			<div className={styles.carDetailInfoBlock}>

				<div className={styles.carDetailGallery}>
					<ImageGallery items={images} />
				</div>

				<div className={styles.carDetailParams}>
					<ul className={styles.carDetailParamsList}>
						<li className={styles.carDetailParamsRow}>
							<span className={styles.carDetailParamsCell}>Год выпуска</span>
							<span className={styles.carDetailParamsCell}>{car.year}</span>
						</li>
						<li className={styles.carDetailParamsRow}>
							<span className={styles.carDetailParamsCell}>Пробег</span>
							<span className={styles.carDetailParamsCell}>{formatNumber(car.mileage)}&nbsp;км</span>
						</li>
						<li className={styles.carDetailParamsRow}>
							<span className={styles.carDetailParamsCell}>Кузов</span>
							<span className={styles.carDetailParamsCell}>Седан</span>
						</li>
						<li className={styles.carDetailParamsRow}>
							<span className={styles.carDetailParamsCell}>Цвет</span>
							<span className={styles.carDetailParamsCell}>Желтый</span>
						</li>
						<li className={styles.carDetailParamsRow}>
							<span className={styles.carDetailParamsCell}>Двигатель</span>
							<span className={styles.carDetailParamsCell}>{car.engineVolume.toFixed(1)} л&thinsp;/&thinsp;{car.enginePower} л.с&thinsp;/&thinsp;Электрический</span>
						</li>
						<li className={styles.carDetailParamsRow}>
							<span className={styles.carDetailParamsCell}>Коробка</span>
							<span className={styles.carDetailParamsCell}>Автомат</span>
						</li>
						<li className={styles.carDetailParamsRow}>
							<span className={styles.carDetailParamsCell}>Привод</span>
							<span className={styles.carDetailParamsCell}>Передний</span>
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.carDetailOwnerInfo}>
				<div className={styles.carDetailOwner}>
					<div className={styles.carDetailOwnerAvatar}>
						<Avatar src={owner.avatar} />
					</div>

					<div className={styles.carDetailOwnerNameBlock}>
						<div className={styles.carDetailOwnerName}>{owner.firstName} {owner.lastName}</div>
						<div className={styles.carDetailOwnerCity}>{car.city}</div>
					</div>
				</div>

				<div className={styles.carDetailOwnerContacts}>
					<div className={styles.carDetailOwnerPhone}>
						<a href={`tel:${owner.phone}`}>{formatPhone(owner.phone)}</a>
					</div>
					<div className={styles.carDetailOwnerEmail}>
						<a href={`mailto:${owner.email}`}>{owner.email}</a>
					</div>
				</div>
			</div>

			{car.ownerDescription?.length ?
				<div className={styles.carDetailOwnerComment}>
					<h3>Комментарий продавца</h3>
					<div>{car.ownerDescription}</div>
				</div>
				: null
			}

		</div>
	);
};

CarDetail.defaultProps = {
	car: {},
};

CarDetail.propTypes = {
	car: PropTypes.object.isRequired
};

export { CarDetail };