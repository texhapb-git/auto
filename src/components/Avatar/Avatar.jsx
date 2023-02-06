import PropTypes from 'prop-types';

import styles from './Avatar.module.scss';

const Avatar = ({ src, alt, size, className, ...rest }) => {
	return (
		<>
			{
				src?.length ?
					<img
						loading="lazy"
						src={src}
						alt={alt}
						className={styles.avatar + ' ' + className}
						style={{ width: `${size}px` }}
						{...rest}
					/>

					: null
			}
		</>
	);
};

Avatar.defaultProps = {
	src: '',
	alt: 'User Avatar'
};

Avatar.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string
};

export { Avatar };
