import PropTypes from 'prop-types';

import { CarListItem } from '../CarListItem';

import styles from './CarList.module.scss';

const CarsList = ({ type, title }) => {
	return (

		<div className={styles.carListContainer}>

			{title.length ?
				<h2>{title}</h2>
				: null
			}

			<div className={styles.carList + ' ' + styles[type]}>
				<CarListItem type={type} />
				<CarListItem type={type} />
				<CarListItem type={type} />
				<CarListItem type={type} />
				<CarListItem type={type} />
				<CarListItem type={type} />
			</div>




		</div>
	);
};

CarsList.defaultProps = {
	type: 'list',
	title: ''
};

CarsList.propTypes = {
	type: PropTypes.oneOf(['list', 'flat'])
};

export { CarsList };