import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<a href="/">Auto<span>S</span></a>
		</div>
	);
};

export { Logo };