import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CarsList } from '../components/CarsList';
import { Spinner } from '../components/Spinner';
import { fetchLastCars, getLastCarsSelector, getLastCarsLoadingSelector, getLastCarsErrorSelector } from '../store/slices/lastCarsSlice';


const MainPage = () => {
	const dispatch = useDispatch();

	const loading = useSelector(getLastCarsLoadingSelector);
	const error = useSelector(getLastCarsErrorSelector);
	const cars = useSelector(getLastCarsSelector);

	useEffect(() => {
		dispatch(fetchLastCars());
	}, []);

	return (
		<>
			<h1>Объявления о продаже авто</h1>
			<p>Тут нужен вдохновляющий текст про сервис</p>

			{!error ?
				<>
					{loading ?
						<Spinner />
						: <CarsList type="flat" title="Последние объявления" cars={cars} />
					}
				</>
				: null
			}
		</>
	);
};

export { MainPage };