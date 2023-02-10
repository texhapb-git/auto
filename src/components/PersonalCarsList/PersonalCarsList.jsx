import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PersonalCarsList.module.scss';

const PersonalCarsList = ({ cars }) => {
	return (
		<>
			<h1>Мои объявления</h1>
			<div><Link to="/personal/car">добавить объявление</Link></div>

			{cars.length ?
				<>Объявы</>
				: <p>Нет объявлений</p>
			}

		</>
	);
};

PersonalCarsList.defaultProps = {
	cars: []
};

PersonalCarsList.propTypes = {
	cars: PropTypes.arrayOf(PropTypes.object)
};

export { PersonalCarsList };