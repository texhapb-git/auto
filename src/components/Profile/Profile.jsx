import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { SvgIcon } from '../SvgIcon';
import { Avatar } from '../Avatar';

import styles from './Profile.module.scss';

const Profile = () => {
	const [auth, setAuth] = useState(false);

	return (
		<div className={styles.profile}>
			{auth ?
				<>
					<div className={styles.profileName}>
						<Link to="/personal">Александр</Link>
					</div>
					<div className={styles.profileAvatarBlock}>
						<Link to="/personal">
							<Avatar src="" className={styles.profileAvatar} />
						</Link>
					</div>
					<Button type="none" className={styles.profileLogout} onClick={() => setAuth(false)} title="Выйти">
						<SvgIcon name="logout" />
					</Button>
				</>
				: <Button styleType="secondary" onClick={() => setAuth(true)}>Войти</Button>
			}

		</div>
	);
};

export { Profile };