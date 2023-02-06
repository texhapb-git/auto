import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SvgIcon } from '../SvgIcon';

import styles from './FavouriteBlock.module.scss';

const FavouriteBlock = () => {

	const [count, setCount] = useState(22);

	return (
		<div className={styles.fav}>
			<Link to="/favourites">
				<SvgIcon name="heart" />
				{count > 0 ?
					<span className={styles.favCount}>{count}</span>
					: null
				}
			</Link>

		</div>
	);
};

export { FavouriteBlock };