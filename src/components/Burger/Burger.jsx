import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button';

import { getIsOpen, toggleOpen } from '../../store/mobileMenuSlice';

import styles from './Burger.module.scss';

const Burger = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(getIsOpen);

	return (
		<Button type="none" className={styles.iconMenu} onClick={() => dispatch(toggleOpen())}>
			<span className={isOpen ? styles.active : ''}></span>
		</Button>
	);
};

export { Burger };
