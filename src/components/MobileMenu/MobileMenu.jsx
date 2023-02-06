import { useSelector } from 'react-redux';

import { Navbar } from '../Navbar';

import { getIsOpen } from '../../store/slices/mobileMenuSlice';

import mobileLinks from '../../config/mobileMenu.json';

import styles from './MobileMenu.module.scss';


const MobileMenu = () => {
	const isOpen = useSelector(getIsOpen);

	return (
		<div className={`${styles.mobileMenuContainer} ${isOpen ? styles.mobileMenuContainerActive : ''}`}>
			<Navbar items={mobileLinks} className="mobileMenu" />
		</div>
	);
};


export { MobileMenu };
