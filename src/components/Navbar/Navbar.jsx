import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = ({ items, className }) => {

	return (
		<>
			{
				items.length ?
					<>
						<nav className={styles[className]}>
							<ul>
								{items.map(link => (
									<li key={link.id}>
										<NavLink className={({ isActive }) =>
											isActive ? styles.active : ''
										} to={link.path}>{link.title}</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</>
					: null
			}
		</>

	);
};

Navbar.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string
};

export { Navbar };