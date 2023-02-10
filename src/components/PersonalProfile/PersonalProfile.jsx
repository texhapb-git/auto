import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthUserInfo, isAuthSelector, authUserInfoSelector } from '../../store/slices/authSlice';
import { formatPhone } from '../../utils/phone';

import styles from './PersonalProfile.module.scss';

const PersonalProfile = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(isAuthSelector);
	const userInfo = useSelector(authUserInfoSelector);

	useEffect(() => {
		if (isAuth && !userInfo) {
			dispatch(getAuthUserInfo());
		}
	}, [isAuth, userInfo, dispatch]);

	if (!userInfo) {
		return null;
	}

	return (
		<div className={styles.personalProfile}>
			<h1>{userInfo.firstName} {userInfo.lastName}</h1>
			<div className={styles.personalProfileValue}><span>Email:</span> {userInfo.email}</div>
			<div className={styles.personalProfileValue}><span>Телефон:</span> {formatPhone(userInfo.phone)}</div>
		</div>
	);

};

export { PersonalProfile };