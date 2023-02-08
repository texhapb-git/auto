import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SvgIcon } from '../SvgIcon';

import { getFavouritesCount } from '../../store/slices/favouritesSlice';

import styles from './FavouriteBlock.module.scss';


const FavouriteBlock = () => {

	const count = useSelector(getFavouritesCount);

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