import { Container } from '../Container';
import { Logo } from '../Logo';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>

			<Container>
				<div className={styles.headerContainer}>
					<div className={styles.headerLogo}>
						<Logo />
					</div>

					<div className="header-menu">
						<nav>
							<ul>
								<li>
									<a href="/">Объявления</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className={styles.profileArea}>
						<button>Войти</button>
					</div>
				</div>
			</Container>

		</header>
	);
};

export { Header };