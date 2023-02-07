import PropTypes from 'prop-types';

import styles from './CarDetail.module.scss';

const CarDetail = ({ car }) => {
	return (
		<div className="ss">
			<h1>{car.title}</h1>
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