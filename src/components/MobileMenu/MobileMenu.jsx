import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from '../Navbar';

import { getIsOpen, toggleOpen } from '../../store/slices/mobileMenuSlice';

import mobileLinks from '../../config/mobileMenu.json';

import styles from './MobileMenu.module.scss';


const MobileMenu = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(getIsOpen);

	const handleClick = () => {
		dispatch(toggleOpen());
	};

	return (
		<div className={`${styles.mobileMenuContainer} ${isOpen ? styles.mobileMenuContainerActive : ''}`}>
			<Navbar items={mobileLinks} className="mobileMenu" onClick={handleClick} />
		</div>
	);
};


export { MobileMenu };
