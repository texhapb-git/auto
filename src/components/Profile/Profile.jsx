import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { SvgIcon } from '../SvgIcon';
import { Avatar } from '../Avatar';

import { isAuthSelector } from '../../store/slices/authSlice';

import styles from './Profile.module.scss';

const Profile = () => {
	const isAuth = useSelector(isAuthSelector);

	return (
		<div className={styles.profile}>
			{isAuth ?
				<>
					<div className={styles.profileName}>
						<Link to="/personal">Александр</Link>
					</div>
					<div className={styles.profileAvatarBlock}>
						<Link to="/personal">
							<Avatar src="" className={styles.profileAvatar} />
						</Link>
					</div>
					<Button type="none" className={styles.profileLogout} title="Выйти">
						<SvgIcon name="logout" />
					</Button>
				</>
				:
				<Link to="/auth"><Button styleType="secondary">Войти</Button></Link>

			}

		</div>
	);
};

export { Profile };