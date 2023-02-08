import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CarsList } from '../components/CarsList';
import { Spinner } from '../components/Spinner';
import { fetchLastCars, getLastCars, getLastCarsLoading, getLastCarsError } from '../store/slices/lastCarsSlice';


const MainPage = () => {
	const dispatch = useDispatch();

	const loading = useSelector(getLastCarsLoading);
	const error = useSelector(getLastCarsError);
	const cars = useSelector(getLastCars);

	useEffect(() => {
		dispatch(fetchLastCars());
	}, [dispatch]);

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